import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory, Switch } from 'react-router';
import HomePage from './Home';
import NavBar from './header/NavBar';
import ProjectsPage from './pages/ProjectsPage';
import ClassesPage from './pages/ClassesPage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="projects" exact path="/projects" component={ProjectsPage} />
            <Route name="classes" exact path="/classes" component={ClassesPage} />
            <Route name="error" component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;