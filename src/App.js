import React, { Component } from 'react';
import './app.scss';

import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import LandingPage from './content/LandingPage';
import OrgPage from './content/OrgPage';

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path="/PlanningNL" component={LandingPage} />
            <Route exact path="/PlanningNL/org" component={OrgPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
