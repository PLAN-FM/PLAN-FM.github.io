import React from 'react';
import {
  ProgramRow, Speaker
} from '../../components/Info';
import { Reference, Instructor, Advisor } from '../../components/Info';
import {
  Grid,
  Column,
  ToastNotification,
  NotificationActionButton,
  InlineNotification,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ProgressStep,
  ProgressIndicator,
  Button,
  ButtonSet,
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
  ContentSwitcher,
  Switch,
  Tag,
  Link,
  Callout,
  Table,
  DataTable,
  TableContainer,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  getExpandHeaderProps,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from '@carbon/react';


let TeamList = require('./data/Team.json');
let AdvisorList = require('./data/Advisor.json');

// class LandingPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {

// }
// }

let ProgramList = require('./data/program.json');
let SpeakerList = require('./data/Speaker.json');

const SchedulePage = props => {
  return (


    <div
      style={{
        width: '80%',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>
          <span className="sub-title">PLAN-FM</span>
          <br />
          <br />
          <h2 className="">
            Bridging <u>Pl</u>anning <u>a</u>nd Reasoning in <u>N</u>atural
            Language with <u>F</u>oundational <u>M</u>odels
          </h2>
          <br/>
          <h5><a
            href="https://aaai.org/conference/aaai/aaai-25/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue"
            style={{ textDecoration: 'none' }}>AAAI 2025</a></h5>
          <h5>February 26th,</h5>
          <h5>Philadelphia, Pennsylvania, USA</h5>
          <h5>Room No: 120C</h5>
          <br />
<br />


<h4>Schedule</h4>
            <hr />
            
 <div style={{

width: '80%',
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '100px',
            margin: '0px auto auto auto'
          }}>
            <h6>Recordings of the bridge are now available on <a href='https://underline.io/events/487/sessions?eventSessionId=19555&searchGroup=lecture'>Underline</a>.</h6> <br/>
<Table >
<TableHead>
              <TableRow>
                  <TableHeader >
                  Local Time (EST)</TableHeader>
                  <TableHeader>Program</TableHeader>
              </TableRow>
              </TableHead>
              <TableBody>
        {ProgramList.map((item,key) =>  <React.Fragment key={key}>
                   <ProgramRow props={item} />
                </React.Fragment>)}
      </TableBody>
</Table>
</div> 
       
<h4>Speakers and Panelists</h4>
        <hr />

<div style={{
  width: '80%',
        minHeight: '100vh',
        paddingTop: '50px',
        margin: '0px auto auto auto'
      }}>
          

        <Grid>
          {SpeakerList.map((item, key) => (
            <React.Fragment key={key}>
              <Speaker props={item} />
            </React.Fragment>
          ))}
        </Grid>
      </div> 

<h3 className="sub-sub-title"> Call for Papers</h3>
<hr />
<br />

                <div
      style={{
        minHeight: '100vh',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>   
          <p>We solicit submissions relevant to the bridge program on the following topics/open questions</p>
          <br/>
<UnorderedList>
 <ListItem> How can we effectively harness the power of foundational models for planning purposes? </ListItem>


 <ListItem> What are some critical decision-making challenges that can be addressed by leveraging foundational models?</ListItem>
 <ListItem> What kind of guarantees can we expect when using foundational models for planning? How can we overcome their limited reliability before deploying them in real-world applications?</ListItem>
 <ListItem> Can we develop a comprehensive suite of datasets and benchmarks that can be shared across communities to evaluate planning abilities in a consistent and reliable manner?</ListItem>
 <ListItem> What are the key evaluation considerations and metrics that should be used to assess the reliability of planning approaches, and what tools can be leveraged across communities to facilitate this evaluation?</ListItem>
 <ListItem> What are the characteristics in future foundation models that can help planning? </ListItem>
</UnorderedList>


<br/>
<h5>Submission Instructions</h5>
<p>
<br/>
Papers must be formatted in AAAI two-column, camera-ready style; see the <a href="https://aaai.org/authorkit25/">AAAI-25 author kit for details</a>.
<br/>
Paper submissions should be made through easychair:  <a href="https://easychair.org/conferences/?conf=planfm2025">https://easychair.org/conferences/?conf=planfm2025</a>
<br/>
<br/>
</p>
<UnorderedList>
<ListItem>System Demonstration – up to 4 pages (include description of the demo and a screenshot or link)</ListItem>
<ListItem>Position papers – up to 4-8 pages (excluding references)</ListItem>
<ListItem>Abstracts – up to 2 pages (excluding references)</ListItem>
</UnorderedList>
<br/>
<br/>
{/* <InlineNotification
                kind="info"
                lowContrast
                hideCloseButton
                subtitle="Have a full paper? Please checkout AAAI Workshop on Planning in the Era of LLMs.  https://llmforplanning.github.io/"
                timeout={0}
                title="Sister Venue"
              /> */}


<br/>
<br/>

<h3 className="sub-sub-title"  ><b style={{ fontWeight: 1000 }}>Important Dates</b></h3>
<br />



<Column lg={16} md={8} sm={4}>
                <ProgressIndicator
                vertical
                currentIndex={4}
                  style={{ marginTop: '15px', fontSize: '2em' }}>
                  <ProgressStep
                  
                    label="Call for Papers"
                    secondaryLabel="Open"
                  />
                  <ProgressStep
                    label="Submissions Due: December 9th, 2024"
                    secondaryLabel="(final extension)"
                  />
                  <ProgressStep
                    label="Author Notifications: December 18th, 2024"
                  />
                  <ProgressStep
                    
                    label="PLAN-FM at AAAI 2025"
                    secondaryLabel="Feb 26, 2025"
                  />
                </ProgressIndicator>
              </Column>

<span style={{color: '#525252'}}>All deadlines are AoE</span>
</div>

<h4>Organizing Team</h4>
<hr />


<div style={{
            minHeight: '100vh',
            paddingTop: '50px',
          }}>
              

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
            <hr/>
          </div>
Please send your inquiries to <a href="mailto:plan-fm-bridge@googlegroups.com">plan-fm-bridge@googlegroups.com</a>
<br/>
    </div>
  );
};

export default SchedulePage;
