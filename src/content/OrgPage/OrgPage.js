import React from 'react';
import {
  Reference,
  Instructor,
  Advisor,
  Resource,
  shuffleArray,
} from '../../components/Info';

import {
  Grid,
  Column,
  Button,
  ButtonSet,
  Link,
  ProgressStep,
  ProgressIndicator,
  UnorderedList,
  ListItem,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ContentSwitcher,
  Switch,
  Tag,
} from '@carbon/react';

let TeamList = require('./data/Team.json');
let AdvisorList = require('./data/Advisor.json');

class OrgPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { day: 1 };
  }

  componentDidMount() {
    const current_time = new Date();
    const set_time = new Date(
      'Tue Feb 07 2023 17:00:00 GMT-0500 (Eastern Daylight Time)'
    );
    const unset_time = new Date(
      'Tue Feb 08 2023 17:00:00 GMT-0500 (Eastern Daylight Time)'
    );
    if (current_time > set_time && current_time < unset_time)
      this.setState({
        ...this.state,
        day: 2,
      });
  }


  render() {
    return (
          <div style={{ minHeight: '100vh', width:"90%",
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '100px',
            margin: '0px auto auto auto' }}>
           
            <h4>Organizing Team</h4>
            <hr />
            <Grid>
              {TeamList.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}
            </Grid>
<br/><br/>
            <h4>Advising Team</h4>
            <hr />
            <Grid>
              {AdvisorList.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}
            </Grid>
            <br />
            <hr/>
            Contact: <a href="mailto:plan-fm-bridge@googlegroups.com">plan-fm-bridge@googlegroups.com</a>
            <br/><br/>
          </div>
    );
  }
}

export default OrgPage;
