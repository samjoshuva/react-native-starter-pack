import React from 'react';
import { Provider } from 'react-redux';
import store from './core/redux/configureStore';
import Main from './main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
