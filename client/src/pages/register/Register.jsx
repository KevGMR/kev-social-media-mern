import './register.css'

function Register() {
  return (
    <div className='login' >
        <div className="loginWrapper">
            <div className="loginLeft">
                  <div className="loginLogo">KevSocial</div>
                  <span className="loginDesc">Connect with friends and the world around you on KevSocial.</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder='Username' className="loginInput" />
                      <input placeholder='Email' className="loginInput" />
                      <input placeholder='Password' className="loginInput" />
                      <input placeholder='Repeat Password' className="loginInput" />
                      <button className='loginButton' >Sign Up</button>
                      <button className="loginRegisterButton">Log into Account</button>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Register;
