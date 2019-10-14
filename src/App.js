import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Users from './containers/Users/Users';
import AddUser from './containers/AddUser/AddUser';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App" data-test="app">
          <Layout>
            <Users />
            <AddUser />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
