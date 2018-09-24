import React, { Fragment } from "react";
import Logo from "../base/Logo";
import DashboardNavItems from './DashboardNavItems';

const DashboardNav = () => (
  <Fragment>
    <div className="dashboard__nav">
      <Logo />
      <DashboardNavItems />
    </div>
  </Fragment>
);

export default DashboardNav;