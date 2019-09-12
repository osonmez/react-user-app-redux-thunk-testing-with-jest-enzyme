import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';

class App extends Component {


  render() {

    return (
      <div className="App" data-test="app">
        <Layout>

        </Layout>
      </div>
    );
  }
}

export default App;
