import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

// test component
import Dashboard from "./dashboard/Dashboard";

const App = () => <Dashboard />;

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)