import React from "react";
import { Route } from 'react-router-dom';
import App from "containers/App/App";
import BriefAbout from "containers/BriefAbout/BriefAbout";
import Projects from "containers/Projects/Projects";
import AboutMe from "containers/AboutMe/AboutMe";
import Tutorial from "containers/Tutorial/Tutorial";
import { ConnectedRouter as Router } from 'react-router-redux'



export default function createRoutes(store, history) {
  return (
    <Router history={history}>
      <div>
        <App>
          <Route exact path="/" component={BriefAbout} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/tutorials" component={Tutorial} />
          {/* <Route path="applications" component={Applications}>
            <IndexRedirect to="/applications/frodev"/>
            <Route path="frodev" component={FroDev}/>
            <Route path="speedvocab" component={SpeedVocab}/>
          </Route> */}
        </App>
      </div>
    </Router>
  );
}
