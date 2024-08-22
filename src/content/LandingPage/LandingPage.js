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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              href="https://bpm2021.diag.uniroma1.it/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue sub-title"
              style={{ textDecoration: 'none' }}>
              AAAI 2025 Bridge on
            </a>
            <h1 className="title">
              Planning in Natural Language
            </h1>
 
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

             {/* <h4>References</h4>
            <br />

            <StructuredListWrapper>
              <StructuredListBody>
                {ReferenceList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Reference props={item} />
                  </React.Fragment>
                ))}
              </StructuredListBody>
            </StructuredListWrapper> */}

            <br />
            <br />
            <br />
            <br />
          </Column>
          
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LandingPage;
