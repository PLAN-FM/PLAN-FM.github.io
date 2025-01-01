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


let SpeakerList = require('./data/Speaker.json');

class SpeakerPage extends React.Component {


  render() {
    return (
      <div style={{
        width: '80%',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>
          
       
        <h4>Speakers</h4>
        <hr />
        <Grid>
          {SpeakerList.map((item, key) => (
            <React.Fragment key={key}>
              <Instructor props={item} />
            </React.Fragment>
          ))}
        </Grid>
<br/><br/>
        
      </div>
    );
  }
}

export default SpeakerPage;
