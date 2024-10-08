import React from 'react';
import { ReferenceList } from './data/References';
import { Reference, Instructor } from '../../components/Info';
import {
  Grid,
  Column,
  ToastNotification,
  StructuredListWrapper,
  StructuredListBody,
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
  Button,
  Link,
} from '@carbon/react';

// class LandingPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {

  // }
// }

const LandingPage = props => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        paddingTop: '50px',
      }}>
      <Grid>
        <Column lg={12} md={8} sm={4}>
        <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue sub-title"
            style={{ textDecoration: 'none' }}>
           <span>PLAN-FM</span>
          </a>        <br/>
          <br/>
          <h2 className="">
          Bridging <u>Pl</u>anning <u>a</u>nd Reasoning in <u>N</u>atural Language with <u>F</u>oundational <u>M</u>odels </h2>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <h4>Program</h4>
          <hr />


          <br />
          <br />

          <Accordion align="start">
            <AccordionItem
              title={<strong>Introduction | 20 min</strong>}
              open>
              <UnorderedList>
                <ListItem>
                  | 5 min
                </ListItem>
                <ListItem>| 15 min</ListItem>
              </UnorderedList>
            </AccordionItem>
          </Accordion>

          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </Column>
        
      </Grid>
    </div>
  );
};

export default LandingPage;
