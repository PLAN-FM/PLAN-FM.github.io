import React from 'react';
import {
  ProgramRow
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
          
            <span className="sub-title">Schedule</span>
          <br />
          <br />
          <h5><a
            href="https://aaai.org/conference/aaai/aaai-25/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue"
            style={{ textDecoration: 'none' }}>AAAI 2025</a></h5>
          <h5>February 26th,</h5>
          <h5>Philadelphia, Pennsylvania, USA</h5>
          <h5>Room No: TBA</h5>
          <br />
<br />



 <div style={{
            width: '80%',
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '100px',
            margin: '0px auto auto auto'
          }}>
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
