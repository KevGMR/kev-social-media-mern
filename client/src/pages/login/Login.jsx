import './login.css'

function Login() {
  return (
    <div className='login' >
        <div className="loginWrapper">
            <div className="loginLeft">
                  <div className="loginLogo">KevSocial</div>
                  <span className="loginDesc">Connect with friends and the world around you on KevSocial.</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder='Email' className="loginInput" />
                      <input placeholder='Password' className="loginInput" />
                      <button className='loginButton' >Log In</button>
                      <span className="loginForgot">Forgot your password?</span>
                      <button className="loginRegisterButton">Create a new Account</button>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Login;
