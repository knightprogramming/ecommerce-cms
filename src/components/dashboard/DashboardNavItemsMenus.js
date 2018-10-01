import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closeNavItem } from "../../actions/nav";
import DashboardNavCloseIcon from "./DashboardNavCloseIcon";

const DashboardNavItemsMenus = ({ clickedNavItem, closeNavItem }) => (
  <Fragment>
    <div className={"nav-item__menu " + (clickedNavItem === "sales" && "show")}>
      <h2>Sales</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/sales/">
            Title
          </Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/sales/">
            Title
          </Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/sales/">
            Title
          </Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/sales/">
            Title
          </Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/sales/">
            Title
          </Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "products" && "show")}
    >
      <h2>Products</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/products/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/products/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/products/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/products/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/products/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "customers" && "show")}
    >
      <h2>Customers</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/customers/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/customers/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/customers/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/customers/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/customers/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "marketing" && "show")}
    >
      <h2>Customers</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/marketing/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/marketing/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/marketing/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/marketing/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/marketing/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "content" && "show")}
    >
      <h2>Content</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/content/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/content/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/content/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/content/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/content/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "reports" && "show")}
    >
      <h2>Reports</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/reports/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/reports/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/reports/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/reports/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/reports/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "stores" && "show")}
    >
      <h2>Stores</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/stores/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/stores/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/stores/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/stores/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/stores/">Title</Link>
        </li>
      </ul>
    </div>
    <div
      className={"nav-item__menu " + (clickedNavItem === "system" && "show")}
    >
      <h2>System</h2>
      <span className="subtitle">Subtitle</span>
      <ul>
        <li onClick={closeNavItem}>
          <Link to="/system/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/system/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/system/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/system/">Title</Link>
        </li>
        <li onClick={closeNavItem}>
          <Link to="/system/">Title</Link>
        </li>
      </ul>
    </div>
    <DashboardNavCloseIcon />
  </Fragment>
);

const mapStateToProps = state => ({
  clickedNavItem: state.nav.clickedNavItem
});

const mapDispatchToProps = dispatch => ({
  closeNavItem: () => dispatch(closeNavItem())
});

DashboardNavItemsMenus.propTypes = {
  clickedNavItem: PropTypes.string,
  closeNavItem: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardNavItemsMenus);
