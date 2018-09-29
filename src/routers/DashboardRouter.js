import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/base/Loading";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardFooter from "../components/dashboard/DashboardFooter";

const DashboardSummary = Loadable({
  loader: () => import("../components/dashboard/DashboardSummary"),
  loading: Loading
});

const SalesDashboard = Loadable({
  loader: () => import("../components/sales/SalesDashboard"),
  loading: Loading
});

const ProductsDashboard = Loadable({
  loader: () => import("../components/products/ProductsDashboard"),
  loading: Loading
});

const CustomersDashboard = Loadable({
  loader: () => import("../components/customers/CustomersDashboard"),
  loading: Loading
});

const MarketingDashboard = Loadable({
  loader: () => import("../components/marketing/MarketingDashboard"),
  loading: Loading
});

const ContentDashboard = Loadable({
  loader: () => import("../components/content/ContentDashboard"),
  loading: Loading
});

const ReportsDashboard = Loadable({
  loader: () => import("../components/reports/ReportsDashboard"),
  loading: Loading
});

const StoresDashboard = Loadable({
  loader: () => import("../components/stores/StoresDashboard"),
  loading: Loading
});

const SystemDashboard = Loadable({
  loader: () => import("../components/system/SystemDashboard"),
  loading: Loading
});

const DashboardRouter = () => (
  <div className="dashboard__router">
    <div>
      <DashboardHeader />
      <div className="dashboard__router-content">
        <Switch>
          <Route path="/" component={DashboardSummary} exact />
          <Route path="/sales" component={SalesDashboard} exact />
          <Route path="/products" component={ProductsDashboard} exact />
          <Route path="/customers" component={CustomersDashboard} exact />
          <Route path="/marketing" component={MarketingDashboard} exact />
          <Route path="/content" component={ContentDashboard} exact />
          <Route path="/reports" component={ReportsDashboard} exact />
          <Route path="/stores" component={StoresDashboard} exact />
          <Route path="/system" component={SystemDashboard} exact />
        </Switch>
      </div>
    </div>
    <DashboardFooter />
  </div>
);

export default DashboardRouter;
