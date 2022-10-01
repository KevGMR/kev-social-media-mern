import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">KevSocial</div>
          <span className="loginDesc">
            Connect with friends and the world around you on KevSocial.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              className="loginInput"
              type="email"
              required
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              type="password"
              required
              minLength="6"
            />
            <input
              placeholder="Repeat Password"
              ref={passwordAgain}
              className="loginInput"
              required
              minLength="6"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link
              to="/login"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
