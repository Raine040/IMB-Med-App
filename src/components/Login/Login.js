import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container">
      {/* Div for login grid layout */}
      <div className="login-grid">
        {/* Div for login text */}
        <div className="login-text">
          <h2>Login</h2>
        </div>

        {/* Additional login text with a link to Sign Up page */}
        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <Link to="../SignUp/SignUp.html" style={{ color: '#2190FF' }}>
              Sign Up Here
            </Link>
          </span>
        </div>

        <br />

        {/* Div for login form */}
        <div className="login-form">
          <form>
            {/* Form group for email input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>

            {/* Form group for password input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                minlength="8" maxlength="16"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            {/* Button group for login and reset buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>

            <br />

            {/* Additional login text for 'Forgot Password' option */}
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;