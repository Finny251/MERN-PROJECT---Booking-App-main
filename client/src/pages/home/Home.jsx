import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import SearchItem from "../../components/searchItem/SearchItem";

const Home = () => {
  const { city } = useContext(SearchContext);

  const { data, loading } = useFetch(
    `/api/hotels${city ? `?city=${city}` : ""}`
  );

  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <h1 className="homeTitle">Available Hotels</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="homeList">
            {data.map((item) => (
              <SearchItem item={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
