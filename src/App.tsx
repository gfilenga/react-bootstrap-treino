import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Social from './pages/social/Social';
import Projects from './pages/projects/Projects';
import NoMatch from './pages/noMatch/NoMatch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/social" component={Social}/>
          <Route path="/projects" component={Projects}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
