import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { closeNavItem } from "../../actions/nav";

const DashboardNavCloseIcon = ({ closeNavItem, clicked }) => (
  <Fragment>
    <div className={"close-icon" + (clicked ? " close-icon--active" : "")} onClick={closeNavItem}>
      <div
        className={
          "close-icon__div" + (clicked ? " close-icon__div--active" : "")
        }
      />
      <div
        className={
          "close-icon__div" + (clicked ? " close-icon__div--active" : "")
        }
      />
    </div>
  </Fragment>
);

const mapStateToProps = state => ({
  clicked: state.nav.clickedNavItem !== null
});

const mapDispatchToProps = dispatch => ({
  closeNavItem: () => dispatch(closeNavItem())
});

DashboardNavCloseIcon.propTypes = {
  closeNavItem: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavCloseIcon);
