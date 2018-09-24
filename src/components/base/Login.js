import React from "react";
import PropTypes from "prop-types";
import Logo from './Logo';
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login }) => (
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
        <button onClick={login}>Sign in</button>
      </div>
    </div>
    <span className="login__legal">
      Copyright© {new Date().getFullYear()} KP Inc. All rights reserved.
    </span>
  </div>
);

const mapDispatchToProps = dispath => ({
  login: () => dispath(login())
});

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(Login);