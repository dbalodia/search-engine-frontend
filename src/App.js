import React from 'react';
import './App.css';
import HomeView from './containers/home.jsx';
import AddPageView from './containers/addPage.jsx';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // <Router>
      <Switch>
        <Route exact={true} path="/" component={HomeView}>
          {/* <HomeView /> */}
        </Route>
        <Route exact={true} path="/add" component={AddPageView}>
          {/* <AddPageView /> */}
        </Route>
      </Switch>
      // </Router >
    );
  }
}

export default App;
