import React, { Component } from 'react';

import { createStore } from 'redux';
import rootReducer from '../ui/root-controllers';

const initializeStore = () => createStore(rootReducer),
isServer = !process.browser,
getStore = () => {
  if (isServer) {
    return initializeStore();
  }

  if (!window.__GLOBAL_STORE__) {
    window.__GLOBAL_STORE__ = initializeStore();
  }
  return window.__GLOBAL_STORE__;
};

export default App => {
  return class withRedux extends Component {
    static async getInitialProps(appContext) {
      const store = getStore();
      let appProps = {};

      appContext.ctx.store = store;

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps
      }
    }

    store = getStore();

    render () {
      return (
        <App 
          {...this.props} 
          store={this.store} 
        />
      );
    }
  }
}