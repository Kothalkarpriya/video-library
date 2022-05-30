import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assests/styles/auth.css";
import { BiRightArrow } from "react-icons/bi";
import { useAuth } from "../../context/context";

export default function Signup() {
  const [user, setUser] = useState({});
  const { signup } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    signup(user);
  };
  return (
    <section className="main-section">
      <div className="signup">
        <h2 className="heading">Signup</h2>
        <form action="#" className="signup-form" onSubmit={submit} id="signup">
          <div className="input-block-name">
            <div className="input-block">
              <label for="#input-name" className="text-align-left">
                First Name
              </label>
              <input
                type="text"
                id="input-name"
                placeholder="First Name"
                required
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
            <div className="input-block">
              <label for="#input-lastname" className="text-align-left">
                Last Name
              </label>
              <input
                type="text"
                id="input-lastname"
                placeholder="Last Name"
                required
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
          </div>
          <div className="input-block">
            <label for="#input-email" className="text-align-left">
              Email Address
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="username@email.com"
              required
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="input-block">
            <label for="input-pass" className="text-align-left">
              Password
            </label>
            <input
              type="password"
              id="input-pass"
              className="input-password"
              placeholder="*************"
              required
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="input-block">
            <label for="input-pass-again" className="text-align-left">
              Confirm Password
            </label>
            <input
              type="password"
              id="input-pass-again"
              className="confirm-password"
              placeholder="*************"
              required
            />
          </div>
          <div className="input-block-check">
            <input
              type="checkbox"
              name="checkPass"
              id="check-box"
              className="text-align-left"
            />
            Show Password
          </div>
          <div className="input-block-check">
            <input type="checkbox" className="accept-ele" required />I accept to
            signup
          </div>
          <div className="input-block">
            <button className="primary-btn btn" type="submit">
              Create New Account
            </button>
          </div>
        </form>

        <div className="input-block login-to">
          <Link to="/Login" className="btn-link-login btn-link">
            Already have an account
          </Link>
          <BiRightArrow className="icon" />
        </div>
      </div>
    </section>
  );
}
