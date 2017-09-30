import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Tabs } from './config/router';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    )
  }
};
