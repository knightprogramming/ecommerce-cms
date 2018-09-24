import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

// test component
import Loading from './base/Loading'

const App = () => (
  <Loading />
)

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)