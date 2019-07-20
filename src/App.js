import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect ,Switch} from 'react-router-dom';
import Home from './routers/home/index';
import User from './routers/user/Index';
import Detail from './routers/detail/Index'
import Seat from './routers/seat/Index'

import './App.css';
import './common.css'
import { directive } from '@babel/types';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact  component={User} />
          <Route path="/detail" exact  component={Detail} />
          <Route path="/seat" exact  component={Seat} />
        </Switch>
      </Router>
    );
  }
}

export default App;
