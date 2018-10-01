import React, { Fragment } from "react";
import Logo from "../base/Logo";
import DashboardNavItems from "./DashboardNavItems";
import DashbaordNavItemsMenus from "./DashboardNavItemsMenus";

const DashboardNav = () => (
  <Fragment>
    <div className="dashboard__nav">
      <Logo />
      <DashboardNavItems />
    </div>
    <DashbaordNavItemsMenus />
  </Fragment>
);

export default DashboardNav;
