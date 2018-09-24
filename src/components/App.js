import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

const App = () => (
  <div>Start</div>
)

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)