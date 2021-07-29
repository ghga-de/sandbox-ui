import React from 'react';
import Main from './components/Main';
import { moduleIds } from './utils/modules';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './w3.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} render={ () => <Main moduleFocus="welcome"/>}/>
          <Route path="/:moduleId" render={({ match }) => {
              // this is a workaround
              // need to find a way to narrow the type from
              // a list or enum
              const moduleId: moduleIds = (
                match.params.moduleId === "explore" ||
                match.params.moduleId === "request" ||
                match.params.moduleId === "login"
              ) ? match.params.moduleId : "welcome";
              
              return (
                <Main moduleFocus={moduleId}/>
              );
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
