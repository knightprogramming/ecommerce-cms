/* eslint-disable import/no-named-as-default */

import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import AppRouter from '../routers/AppRouter'

const App = () => <AppRouter />;

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)