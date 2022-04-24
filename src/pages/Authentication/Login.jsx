import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <main className="main">
        <section className="main-section">
          <div className="login">
            <h2 className="heading">Login</h2>
            <form action="" className="login-form" id="login">
              <div className="input-block">
                <label for="#input-email">Email Address</label>
                <input
                  type="email"
                  id="input-email"
                  placeholder="username@email.com"
                  required
                />
              </div>
              <div className="input-block">
                <label for="input-pass">Password</label>
                <input
                  type="password"
                  id="input-pass"
                  className="input-password"
                  placeholder="*************"
                  required
                />
              </div>
              <div className="input-block-check">
                <input type="checkbox" className="accept-ele" required />
                Remember me
                <Link to="/" className="btn-link">
                  Forgot your Password?
                </Link>
              </div>
              <div className="input-block">
                <button className="login-btn">Login</button>
              </div>
            </form>
            <div className="input-block">
              <Link to="/Signup" className="login-to-signup">
                Create New Account
                <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
