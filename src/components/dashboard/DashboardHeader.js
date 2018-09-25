import React from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from '../../actions/auth'

const DashboardFooter = ({ logout }) => (
  <div className="dashboard__header">
    <h1>Dashboard</h1>
    <div className="dashboard__header-actions">
      <FontAwesomeIcon icon="search" />
      <FontAwesomeIcon icon="bell" />
      <FontAwesomeIcon icon="user" />
      <button onClick={logout}>Log Out</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(DashboardFooter);
