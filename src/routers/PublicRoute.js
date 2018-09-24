import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect
          to={
            props.location.state === undefined
              ? "/"
              : props.location.state.from.pathname
          }
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(PublicRoute);
