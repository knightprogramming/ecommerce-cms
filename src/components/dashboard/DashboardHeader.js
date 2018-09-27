import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../actions/auth";

const DashboardHeader = ({ pathname, logout }) => (
  <div className="dashboard__header">
    <h1>{pathname === "/" ? "Dashboard" : pathname.split("/")[1].replace(/^\w/, c => c.toUpperCase())}</h1>
    <div className="dashboard__header-actions">
      <FontAwesomeIcon icon="search" />
      <FontAwesomeIcon icon="bell" />
      <FontAwesomeIcon icon="user" />
      <button onClick={logout}>Log Out</button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

DashboardHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHeader)
