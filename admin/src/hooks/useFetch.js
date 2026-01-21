import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            if (!user?.accessToken) return;
          },
        });

        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || "Request failed");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
