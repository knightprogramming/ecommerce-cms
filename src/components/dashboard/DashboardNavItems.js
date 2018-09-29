import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectNav, clickNav } from '../../actions/nav'

class DashboardNavItems extends Component {
  componentDidMount = () => {
    const { pathname } = this.props
    const id = pathname === "/" ? null : pathname.split("/")[1]
    this.props.selectNav(id)
  }
  handleClick = (id, e) => {
    if (id !== null) {
      e.preventDefault();
    }
    this.props.clickNav(id)
  };
  render() {
    const { selectedNav } = this.props
    return (
      <div className="dashboard__nav-items">
        <ul>
          <li>
            <NavLink
              className={selectedNav === null ? "active" : ""}
              activeClassName={selectedNav === null ? "active" : ""}
              exact
              to="/"
              onClick={e => this.handleClick(null, e)}
            >
              <FontAwesomeIcon icon="tachometer-alt" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="salesNav"
              className={selectedNav === "sales" ? "active" : ""}
              activeClassName={selectedNav === "sales" ? "active" : ""}
              to="/sales"
              onClick={e => this.handleClick("sales", e)}
            >
              <FontAwesomeIcon className="sales-icon" icon="dollar-sign" />
              <span>Sales</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="productsNav"
              className={selectedNav === "products" ? "active" : ""}
              activeClassName={selectedNav === "products" ? "active" : ""}
              to="/products"
              onClick={e => this.handleClick("products", e)}
            >
              <FontAwesomeIcon icon="cube" />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="customersNav"
              className={selectedNav === "customers" ? "active" : ""}
              activeClassName={selectedNav === "customers" ? "active" : ""}
              to="/customers"
              onClick={e => this.handleClick("customers", e)}
            >
              <FontAwesomeIcon className="person-icon" icon="male" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="marketingNav"
              className={selectedNav === "marketing" ? "active" : ""}
              activeClassName={selectedNav === "marketing" ? "active" : ""}
              to="/marketing"
              onClick={e => this.handleClick("marketing", e)}
            >
              <FontAwesomeIcon icon="bullhorn" />
              <span>Marketing</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="contentNav"
              className={selectedNav === "content" ? "active" : ""}
              activeClassName={selectedNav === "content" ? "active" : ""}
              to="/content"
              onClick={e => this.handleClick("content", e)}
            >
              <FontAwesomeIcon icon="object-group" />
              <span>Content</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="reportsNav"
              className={selectedNav === "reports" ? "active" : ""}
              activeClassName={selectedNav === "reports" ? "active" : ""}
              to="/reports"
              onClick={e => this.handleClick("reports", e)}
            >
              <FontAwesomeIcon icon="chart-bar" />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="storesNav"
              className={selectedNav === "stores" ? "active" : ""}
              activeClassName={selectedNav === "stores" ? "active" : ""}
              to="/stores"
              onClick={e => this.handleClick("stores", e)}
            >
              <FontAwesomeIcon icon="store" />
              <span>Stores</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              id="systemNav"
              className={selectedNav === "system" ? "active" : ""}
              activeClassName={selectedNav === "system" ? "active" : ""}
              to="/system"
              onClick={e => this.handleClick("system", e)}
            >
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedNav: state.nav.selectedNav,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  selectNav: id => {
    dispatch(selectNav(id))
  },
  clickNav: id => {
    dispatch(clickNav(id))
  }
})

DashboardNavItems.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavItems);
