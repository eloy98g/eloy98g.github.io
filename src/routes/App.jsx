import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Project from '../containers/Project';
import ProjectList from '../containers/ProjectList';
import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/project/:id" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
