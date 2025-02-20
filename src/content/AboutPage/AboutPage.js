import React from 'react';
import { Reference, Instructor, Advisor } from '../../components/Info';
import {
  Grid,
  Column,
  ToastNotification,
  NotificationActionButton,
  InlineNotification,
  StructuredListWrapper,
  StructuredListBody,
  ProgressStep,
  ProgressIndicator,
  Button,
  ButtonSet,
  Accordion,
  AccordionItem,
  UnorderedList,
  ListItem,
  Link,
  Callout,
} from '@carbon/react';

let TeamList = require('./data/Team.json');
let AdvisorList = require('./data/Advisor.json');

const AboutPage = props => {
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="">
            About PLAN-FM
          </h3>
          <hr />
          <br/>
          <br />
          <br />
          <br />
              <p>
              There is a growing interest in utilizing Foundational Models for complex tasks that require multi-step reasoning and planning. This promising area of research is seeing an increasing number of contributions from researchers in the fields of Natural Language Processing (NLP), Planning, and Robotics. PLAN-FM Bridge program aims to facilitate collaboration and knowledge-sharing among these researchers. This program will provide a stage to discuss and exchange perspectives, identify critical challenges and outline research agendas. 
              </p>
              <br />
          <br />
          <br />
              <h3> Goal of the Bridge</h3>
              <hr />
              <br />
              <p>
Large Language Models, trained to predict the
next word, have demonstrated remarkable performance on
benchmarks that require reasoning capabilities. Building on this success, researchers have leveraged these models to generate
action plans and make sequential decisions. These
approaches are based on the idea that LLMs, having been
trained on vast amounts of data, have effectively internalized a comprehensive “world model” that spans most do-
mains. By possessing a comprehensive world model and assuming strong reasoning abilities,
LLMs should be capable of reasoning about the current state
and determining the next action. Despite ongoing scholarly
debate about the existence of a comprehensive world model
and strong reasoning abilities in LLMs, the potential of these
models is undeniable, and researchers are poised to uncover
even more exciting possibilities. Hence, we propose a bridge
program to illuminate the exciting possibilities of planning
in natural language. By convening experts from the NLP,
Planning, and Robotics communities, we aim to harness the
collective power of our knowledge to explore the vast opportunities that arise when LLMs are applied to planning.
</p>
<br/>
<p>
<strong>The time is now ripe</strong> for Planning, NLP and Robotics communities to come together. With the growing interest in using foundational models (including large language models,visual language models, multi-modal language models) as agents to orchestrate workflows, the potential for collaboration and innovation is immense. 
The convergence of planning, NLP, and foundational models holds great promise. 

</p>
<br />
          

<strong>In this bridge we aim to</strong>

<UnorderedList>
                        <ListItem style={{ marginTop: '10px' }}>
                          <strong>Foster interactions between NLP, Planning and Robotics researchers</strong> Pthat are using and working with foundational models. Despite the growing number of contributions, there is still a lack of awareness and understanding of the approaches, tools, and resources used by each community. The planning community's tools and resources are not typically accessible or familiar to those in NLP, and vice versa. The libraries and frameworks used by NLP practitioners are not commonly used by those in the planning community.
                        </ListItem>
                        <ListItem style={{ marginTop: '10px' }}>
                        Provide a stage to <strong>discuss and exchange common terminology</strong>. To reach common grounds it might be crucial to establish a clear understanding of shared vocabulary. Specifically, it's important to revisit the definition of a "plan" to ensure clarity. In the planning community, the term typically refers to the use of search techniques to develop a sequence of actions that can achieve a specific goal with certain guarantees with certain guarantees and call that sequence a "plan". 
                        </ListItem>
                        <ListItem style={{ marginTop: '10px' }}>
                        <strong>Identify a shared research agenda and pinpoint the most critical challenges</strong>. By bringing together prominent representatives from these communities at a bridge program, would provide a common ground for researchers to develop a comprehensive list of pros and cons of using foundational models for planning. This would allow to confront and broaden research frontiers. 
                        </ListItem>
                        <ListItem style={{ marginTop: '10px' }}>
                         Finally, the bridge would <strong>create a rich repository of resources</strong> that can be leveraged by the community, thereby facilitating cross-pollination of ideas and fostering collaboration across research fields to drive the robust advancement of automated planning.
                        </ListItem>
                        </UnorderedList>


<br/>

    <div
      style={{
        minHeight: '100vh',
        paddingTop: '50px',
        paddingBottom: '100px',
        margin: '0px auto auto auto'
      }}>
          

<h3 className="sub-sub-title"> Call for Papers</h3>
<hr />
<br />
             
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
<InlineNotification
                kind="info"
                lowContrast
                hideCloseButton
                subtitle="Have a full paper? Please checkout AAAI Workshop on Planning in the Era of LLMs.  https://llmforplanning.github.io/"
                timeout={0}
                title="Sister Venue"
              />


<br/>
<br/>

<h3 className="sub-sub-title"  ><b style={{ fontWeight: 1000 }}>Important Dates</b></h3>
<br />



<Column lg={16} md={8} sm={4}>
                <ProgressIndicator
                vertical
                currentIndex={3}
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
<br/>
</div>


<div style={{
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '100px',
            margin: '0px auto auto auto'
          }}>
              
           
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

export default AboutPage;
