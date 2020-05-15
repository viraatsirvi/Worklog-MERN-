import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from '../src/components/login/login';
import Home from '../src/components/home/home';
import Task from '../src/components/task/task';
import Navbar from '../src/components/navbar/navbar';

//import Protected from '../src/components/login/protected';
class App extends Component {
 

  render() {
    return (
      <Router>
        <div className="">
            <Navbar />
            <Switch> 
              <Route exact path="/" component={Home}/>
              <Route path="/login-register" component={Login}/>
              <Route path="/create" component={Task}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
