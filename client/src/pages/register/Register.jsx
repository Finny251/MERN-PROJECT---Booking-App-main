import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        { username, email, password },
        { withCredentials: true }
      );
      navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="Username"
          className="rInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="rInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="rInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className="rButton">
          Register
        </button>
        {error && <span>Something went wrong</span>}
      </div>
    </div>
  );
};

export default Register;

