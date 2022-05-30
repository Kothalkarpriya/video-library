import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assests/styles/auth.css";
import { BiRightArrow } from "react-icons/bi";
import { useAuth } from "../../context/context";

export default function Login() {
  const [user, setUser] = useState({
    email: "priyakothalkar@gmail.com",
    password: "priya123",
  });

  const { login } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <section className="main-section">
      <div className="login">
        <h2 className="heading">Login</h2>
        <form action="#" onSubmit={submit} className="login-form" id="login">
          <div className="input-block">
            <label for="#input-email" className="text-align-left">
              Email Address
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="email@email.com"
              required
              name="email"
              // eslint-disable-next-line no-undef
              value={user.email}
              // eslint-disable-next-line no-undef
              onChange={(e) => changeInputHandler(e,email)}
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
              name="password"
              // eslint-disable-next-line no-undef
              value={user.password}
              // eslint-disable-next-line no-undef
              onChange={(e) => changeInputHandler(e, password)}
            />
          </div>
          <div className="input-block">
            <Link to="/" className="btn-link">
              Forgot your Password?
            </Link>
          </div>
          <div className="input-block">
            <button className="primary-btn btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="input-block login-to">
          <Link to="/SignUp" className="btn-link-login btn-link">
            Create New Account
          </Link>
          <BiRightArrow className="icon" />
        </div>
      </div>
    </section>
  );
}
