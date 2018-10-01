import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectNavItem, clickNavItem } from "../../actions/nav";

class DashboardNavItems extends Component {
  componentDidMount = () => {
    const { pathname } = this.props;
    const id = pathname === "/" ? null : pathname.split("/")[1];
    this.props.selectNavItem(id);
  };
  handleClick = (id, e) => {
    if (id !== null) {
      e.preventDefault();
    }
    this.props.clickNavItem(id);
  };
  render() {
    const { selectedNavItem } = this.props;
    return (
      <div className="dashboard__nav-items">
        <ul>
          <li>
            <NavLink
              className={selectedNavItem === null ? "active" : ""}
              activeClassName={selectedNavItem === null ? "active" : ""}
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
              className={selectedNavItem === "sales" ? "active" : ""}
              activeClassName={selectedNavItem === "sales" ? "active" : ""}
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
              className={selectedNavItem === "products" ? "active" : ""}
              activeClassName={selectedNavItem === "products" ? "active" : ""}
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
              className={selectedNavItem === "customers" ? "active" : ""}
              activeClassName={selectedNavItem === "customers" ? "active" : ""}
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
              className={selectedNavItem === "marketing" ? "active" : ""}
              activeClassName={selectedNavItem === "marketing" ? "active" : ""}
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
              className={selectedNavItem === "content" ? "active" : ""}
              activeClassName={selectedNavItem === "content" ? "active" : ""}
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
              className={selectedNavItem === "reports" ? "active" : ""}
              activeClassName={selectedNavItem === "reports" ? "active" : ""}
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
              className={selectedNavItem === "stores" ? "active" : ""}
              activeClassName={selectedNavItem === "stores" ? "active" : ""}
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
              className={selectedNavItem === "system" ? "active" : ""}
              activeClassName={selectedNavItem === "system" ? "active" : ""}
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
  selectedNavItem: state.nav.selectedNavItem,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  selectNavItem: id => {
    dispatch(selectNavItem(id));
  },
  clickNavItem: id => {
    dispatch(clickNavItem(id));
  }
});

DashboardNavItems.propTypes = {
  selectedNavItem: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  selectNavItem: PropTypes.func.isRequired,
  clickNavItem: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardNavItems);
