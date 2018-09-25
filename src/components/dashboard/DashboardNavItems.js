import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DashboardNavItems extends Component {
  render() {
    return <div className="dashboard__nav-items">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              <FontAwesomeIcon icon="tachometer-alt" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/sales">
              <FontAwesomeIcon className="sales-icon" icon="dollar-sign" />
              <span>Sales</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/products">
              <FontAwesomeIcon icon="cube" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/customers">
              <FontAwesomeIcon className="person-icon" icon="male" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/marketing">
              <FontAwesomeIcon icon="bullhorn" />
              <span>Marketing</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/content">
              <FontAwesomeIcon icon="object-group" />
              <span>Content</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/reports">
              <FontAwesomeIcon icon="chart-bar" />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/stores">
              <FontAwesomeIcon icon="store" />
              <span>Stores</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/system">
              <FontAwesomeIcon icon="cogs" />
              <span>System</span>
            </NavLink>
          </li>
          <li className="dashboard__nav-items--bottom">
            <Link to="">
              <FontAwesomeIcon icon="question" />
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </div>;
  }
}

export default DashboardNavItems;
