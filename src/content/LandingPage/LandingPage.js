import React from 'react';
import { ReferenceList } from './data/References';
import { Reference, Instructor, Advisor } from '../../components/Info';
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
        width: '80%',
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>
          
            <span class="sub-title">PLAN-FM</span>
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
          <h5>Philadelphia, Pennsylvania, USA</h5>
          <br />
          <br />
          <br />
              <p>
              There is a growing interest in utilizing Foundational Models for complex tasks that require multi-step reasoning and planning. This promising area of research is seeing an increasing number of contributions from researchers in the fields of Natural Language Processing (NLP), Planning, and Robotics. PLAN-FM Bridge program aims to facilitate collaboration and knowledge-sharing among these researchers. This program will provide a stage to discuss and exchange perspectives, identify critical challenges and outline research agendas. 
              </p>
              <br />
          <br />
          <br />
              <h3 class="sub-sub-title"> Objective</h3>
              <hr />
              <br />
              <p>
In this bridge, we aim to foster interactions between NLP, Planning and Robotics researchers that are using and working with foundational models, provide a stage to discuss and exchange common terminology, identify a shared research agenda and pinpoint the most critical challenges, and create a rich repository of resources that can be leveraged by the community, thereby facilitating cross-pollination of ideas and fostering collaboration across research fields to drive the robust advancement of automated planning.
</p>
<br />
          <br />
          <br />
              <h3 class="sub-sub-title"> Topics/Open Questions </h3>
              <hr />
              <br />
              <p>
              
<UnorderedList>
  <ListItem> How can we effectively harness the power of foundational models for planning purposes? </ListItem>


  <ListItem> What are some critical decision-making challenges that can be addressed by leveraging foundational models?</ListItem>
  <ListItem> What kind of guarantees can we expect when using foundational models for planning? How can we overcome their limited reliability before deploying them in real-world applications?</ListItem>
  <ListItem> Can we develop a comprehensive suite of datasets and benchmarks that can be shared across communities to evaluate planning abilities in a consistent and reliable manner?</ListItem>
  <ListItem> What are the key evaluation considerations and metrics that should be used to assess the reliability of planning approaches, and what tools can be leveraged across communities to facilitate this evaluation?</ListItem>
  <ListItem> What are the characteristics in future foundation models that can help planning? </ListItem>
</UnorderedList>
</p>
<br />
          <br />
          <br />
<h3 class="sub-sub-title"> Format of Bridge </h3>
<hr />
<br />
<p>
The bridge will provide a rich program of activities, including tutorials, panel discussions, talks, and networking opportunities.  The bridge event will include a half-day tutorial session with a goal of fostering interdisciplinary understanding and exchange of fundamental principles. Second half of the day will include invited talks, panel, and poster session. 
</p>
<br/>
<br/>
<p>
We also accept submissions of abstracts, demonstrations as well as position papers. 
</p>


<br />
          <br />
          <br />
<h3 class="sub-sub-title"> Call for Papers</h3>
<hr />
<br />
<p>
We solicit submissions relevant to the bridge program of the following types:
<UnorderedList>
<ListItem>System Demonstration – up to 4 pages (include description of the demo and a screenshot or link)</ListItem>
<ListItem>Position papers – up to 4-8 pages (excluding references)</ListItem>
<ListItem>Abstracts – up to 2 pages (excluding references)</ListItem>
</UnorderedList>
<br/>
<br/>
</p>
<h3 class="sub-sub-title"  ><u><b style={{ fontWeight: 1000 }}>Important Dates</b></u></h3>
<br />
<p>
<UnorderedList>
<ListItem><b>Paper submission deadline:</b> Sunday, November 24, 2024 (AOE)</ListItem>
<ListItem><b>Paper acceptance notification:</b> Monday, December 9, 2024 (AOE)</ListItem>
</UnorderedList>
<br/>
<br/>
Papers must be formatted in AAAI two-column, camera-ready style; see the <a href="https://aaai.org/authorkit25/">AAAI-25 author kit for details</a>.
<br/>
Paper submissions should be made through easychair:  <a href="https://easychair.org/conferences/?conf=planfm2025">https://easychair.org/conferences/?conf=planfm2025</a>
</p>
<br/>
<br/>
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

export default LandingPage;
