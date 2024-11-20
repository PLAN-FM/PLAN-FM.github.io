import React, { Component } from 'react';
import './app.scss';

import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import LandingPage from './content/LandingPage';
import AboutPage from './content/AboutPage';
import OrgPage from './content/OrgPage';
import SchedulePage from './content/SchedulePage';
import SpeakerPage from './content/SpeakerPage/SpeakerPage';

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="org" component={OrgPage} />
            <Route exact path="/org" component={OrgPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="about" component={AboutPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="schedule" component={SchedulePage} />
            <Route exact path="/speaker" component={SpeakerPage} />
            <Route exact path="speaker" component={SpeakerPage} />
            <Route component={LandingPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
