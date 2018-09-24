import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from './store/configureStore'
import Root from './components/Root'
import './styles/styles.scss'
import { logout } from './actions/auth'
import Loading from './components/base/Loading';

require('./favicon.ico')

const store = configureStore()

const appWrapper = (
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>
)

const loadingWrapper = (
  <Loading />
)

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    render(appWrapper, document.getElementById("app"));
    hasRendered = true;
  }
};

render(loadingWrapper, document.getElementById("app"));

/* START temporary 'fake' login logic */
function select(state) {
  return state.auth.uid;
}

const unsubscribe = store.subscribe(checkUser);

function checkUser() {
  let user = select(store.getState());

  if (user) {
    unsubscribe();
    renderApp();

    if (history.location.pathname === "/login") {
      const location = {
        pathname: "/login",
        state: undefined
      };
      history.push(location);
    }
  } else {
    unsubscribe();
    store.dispatch(logout());
    renderApp();
  }
}

checkUser();
/* END temporary 'fake' login logic */

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}