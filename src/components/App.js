import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

// test component
import DashboardNav from './dashboard/DashboardNav'

const App = () => <DashboardNav />;

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)