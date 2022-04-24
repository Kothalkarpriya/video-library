import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <main className="main">
        <section className="main-section">
          <div className="signup">
            <h2 className="heading">Signup</h2>
            <form action="" className="signup-form" id="signup">
              <div className="input-block-name">
                <div className="input-block">
                  <label for="#input-name">First Name</label>
                  <input
                    type="text"
                    id="input-name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-block">
                  <label for="#input-lastname">Last Name</label>
                  <input
                    type="text"
                    id="input-lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
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
              <div className="input-block">
                <label for="input-pass-again">Confirm Password</label>
                <input
                  type="password"
                  id="input-pass-again"
                  className="confirm-password"
                  placeholder="*************"
                  required
                />
                <div className="input-block-check">
                  <input type="checkbox" name="checkPass" id="check-box" />
                  Show Password
                </div>
              </div>

              <div className="input-block-check">
                <input type="checkbox" className="accept-ele" required />I
                accept all Terms & condition
              </div>
              <div className="input-block">
                <button className="signup-btn">Create New Account</button>
              </div>
            </form>

            <div className="input-block">
              <Link to="/Login" className="signup-to-login">
                Already have an account
                <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
