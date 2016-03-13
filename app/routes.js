import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CreatePage from './containers/CreatePage';
import ProjectPage from './containers/ProjectPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/create" component={CreatePage} />
    <Route path="/project/:project" component={ProjectPage} />
  </Route>
);

/*

<Route path="/project/:project" component={Project}>
  <Route path="/project/:project/post/create" component={CreateProject} />
  <Route path="/project/:project/post/edit/:post" component={EditProject} />
  <Route path="/project/:project/settings" component={Settings}/>
</Route>

*/
