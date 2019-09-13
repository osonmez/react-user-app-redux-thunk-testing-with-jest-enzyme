import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Users from './containers/Users/Users';

class App extends Component {


  render() {

    return (
      <div className="App" data-test="app">
        <Layout>
          <Users />
        </Layout>
      </div>
    );
  }
}

export default App;
