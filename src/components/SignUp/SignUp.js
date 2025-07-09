import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      {/* Main container with margin-top */}
      <div className="signup-grid">
        {/* Grid layout for sign-up form */}
        <div className="signup-text">
          {/* Title for the sign-up form */}
          <h1>Sign Up</h1>
        </div>

        <div className="signup-text1" style={{ textAlign: 'left' }}>
          {/* Text for existing members to log in */}
          Already a member?{' '}
          <span>
            <Link to="../Login/Login.html" style={{ color: '#2190FF' }}>
              {' '}
              Login
            </Link>
          </span>
        </div>

        <div className="signup-form">
          {/* Form for user sign-up */}
          <form>
            {/* Start of the form */}

            <div className="form-group">
              {/* Form group for user's name */}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              {/* Form group for user's phone number */}
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                pattern="\d{10}"
                title="Phone number must be exactly 10 digits"
              />
            </div>

            <div className="form-group">
              {/* Form group for user's email */}
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

            <div className="form-group">
              {/* Form group for user's password */}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            <div className="btn-group">
              {/* Button group for form submission and reset */}
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;