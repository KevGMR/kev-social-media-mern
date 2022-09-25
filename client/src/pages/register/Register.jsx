import { useRef } from "react";
import "./register.css";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity('Passwords do not match')
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
              minLength='6'
              type="password"
            />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
