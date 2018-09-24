import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

// test component
import Logo from './base/Logo'

const App = () => (
  <Logo />
)

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)