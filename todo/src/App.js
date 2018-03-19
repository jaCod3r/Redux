import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">App is loading...</div>
      </Provider>
    );
  }
}

export default App;
