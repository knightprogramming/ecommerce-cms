import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardRouter from "../../routers/DashboardRouter";

const Dashboard = () => (
  <div className="dashboard">
    <DashboardNav />
    <div className="dashboard__main">
      <DashboardRouter />
    </div>
  </div>
);

export default Dashboard;
