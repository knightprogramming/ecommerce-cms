import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from './Logo'

const Login = () => (
  <div className="login__wrapper">
    <div className="login">
      <div className="login__title">
        <Logo />
        <h1>
          KP.CMS
          <sup>&trade;</sup>
        </h1>
      </div>
      <p>Welcome, please sign in</p>
      <label htmlFor="username">
        <span>*</span> Username
      </label>
      <input id="username" type="text" name="username" />
      <label htmlFor="password">
        <span>*</span> Password
      </label>
      <input id="password" type="text" name="password" />
      <a href="#">Forgot your password?</a>
      <div>
        <button>Sign in</button>
      </div>
    </div>
    <span className="login__legal">
      Copyright© {new Date().getFullYear()} KP Inc. All rights reserved.
    </span>
  </div>
);

export default Login