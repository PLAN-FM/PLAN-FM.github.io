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
let PanelList = require('./data/Panel.json');

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



 <div style={{
            width: '80%',
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '100px',
            margin: '0px auto auto auto'
          }}>
            <h4>Schedule</h4>
            <hr />
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


<div style={{
        width: '80%',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>
          
       
        <h4>Speakers and Panelists</h4>
        <hr />
        <Grid>
          {SpeakerList.map((item, key) => (
            <React.Fragment key={key}>
              <Speaker props={item} />
            </React.Fragment>
          ))}
        </Grid>
<br/><br/>
      </div> 


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
Please send your inquiries to <a href="mailto:plan-fm-bridge@googlegroups.com">plan-fm-bridge@googlegroups.com</a>
<br/>
<br/>
<br/>
    </div>
  );
};

export default SchedulePage;
