import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Loadable from "react-loadable";
import Loading from "../components/base/Loading";

const Login = Loadable({
  loader: () => import("../components/base/Login"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("../components/dashboard/Dashboard"),
  loading: Loading
});

const AppRouter = () => (
  <Switch>
    <PublicRoute path="/login" component={Login} />
    <PrivateRoute path="/" component={Dashboard} />
  </Switch>
);

export default AppRouter;
