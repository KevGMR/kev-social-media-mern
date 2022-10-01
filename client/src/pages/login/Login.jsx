import "./login.css";
import { useRef, useContext } from "react";

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import { CircularProgress } from "@mui/material";

function Login() {
  const email = useRef();
  const password = useRef();

  const {isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot your password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Create a new Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
