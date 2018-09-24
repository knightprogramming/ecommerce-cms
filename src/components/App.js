import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

// test component
import Login from "./base/Login";

const App = () => <Login />;

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)