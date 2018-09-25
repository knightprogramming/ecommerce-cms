import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/base/Logo';

const DashboardFooter = () => (
  <div className="dashboard__footer">
    <div>
      <Logo />
      <span>
        Copyright© {new Date().getFullYear()} KP Inc. All rights reserved.
      </span>
    </div>
    <div>
      <span>
        <b>KP.CMS</b> ver. 0.1.0
      </span>
      <Link to="">Report Bugs</Link>
    </div>
  </div>
);

export default DashboardFooter;
