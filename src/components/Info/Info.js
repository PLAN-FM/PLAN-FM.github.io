import React from 'react';
import { BorderFull, Document } from '@carbon/icons-react';
import {
  Grid,
  Column,
  StructuredListRow,
  StructuredListCell,
  Tile,
  Table,
  TableHead,
  TableRow,
  TableExpandRow,
  TableExpandedRow,
  Tooltip,
  Button,
  TableHeader,
  TableCell,
  Link,
} from '@carbon/react';
import { Event, Star, StarFilled } from '@carbon/icons-react';
import { CodeSnippet } from '@carbon/react/es'
const generateImageUrl = imageUrl => {
  return `${process.env.PUBLIC_URL}/images/${imageUrl}.png`;
};

const Reference = props => {
  return (
    <StructuredListRow>
      <StructuredListCell className="vertial-align-middle">
        <Link href={props.props.link} target="_blank">
          <Document />
        </Link>
      </StructuredListCell>
      <StructuredListCell>
        <strong>{props.props.title}</strong> by {props.props.authors}. In:{' '}
        {props.props.venue}.
      </StructuredListCell>
    </StructuredListRow>
  );
};

const Advisor = props => {
  return (
    <StructuredListRow>
      <StructuredListCell>
        <a href={props.props.link}>
          <strong>{props.props.name}</strong>
        </a>
        <br />
        <i>{props.props.affiliation}</i>
      </StructuredListCell>
    </StructuredListRow>
  );
};

const ProgramRow = props => {

  if (props.props.id === 'break') {
    return <TableRow key={props.props.key}>
    <TableHeader key={props.props.key}>{props.props.time}</TableHeader>
    <TableHeader key={props.props.key}>{props.props.title}  {props.props.hasResource ? <span>(<a target="_blank" href={props.props.resourceLink}>{props.props.resource}</a>)</span>   : '' } {props.props.videoLink ?  <span>(<a target="_blank" href={props.props.videoLink}>video</a>)</span> : '' }</TableHeader>
   </TableRow>
   }
  if (props.props.id === 'expand') {
    return  <React.Fragment><TableRow key={props.props.key}>
            <TableCell key={props.props.key}>{props.props.time}</TableCell>
            <TableCell key={props.props.key}><StarFilled />   <span >{props.props.title}: </span><span style={{
                fontWeight: '600'
              }}>{props.props.speaker}</span> <br/>    <br/> <span style={{
                fontStyle: 'italic'
              }}>{props.props.topic} </span> <br/>{props.props.hasResource ?  <span><br/>(<a target="_blank" href={props.props.resourceLink}>{props.props.resource}</a>)</span> : '' } {props.props.videoLink ?  <span>(<a target="_blank" href={props.props.videoLink}>video</a>)</span> : '' }
              {props.props.abstract ? <div>
              <br/><CodeSnippet wrapText type="multi" hideCopyButton maxCollapsedNumberOfRows="1" style={{fontFamily: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif"}}>{props.props.abstract}</CodeSnippet></div>
              : ''}</TableCell>
          </TableRow>
          </React.Fragment>
  } 
  return (
    <TableRow key={props.props.key}>
           <TableCell key={props.props.key}>{props.props.time}</TableCell>
           <TableCell key={props.props.key}>{props.props.title}: <span style={{
                fontStyle: 'italic'
              }}>{props.props.paper ? <a target="_blank" href={props.props.paper}> {props.props.topic}</a>: props.props.topic} </span> <span style={{
                fontWeight: '600'
              }}>{props.props.speaker}</span> {props.props.hasResource ? <span> (<a target="_blank" href={props.props.resourceLink}>{props.props.resource}</a>) </span> : '' } {props.props.videoLink ?  <span>(<a target="_blank" href={props.props.videoLink}>video</a>)</span> : '' }
              </TableCell>
          </TableRow>
  );
};


const ProgramRow_list = props => {
  if (props.props.id === 'break') {
    return <BreakRow  props={props.props}/>
   }
  return (
    <StructuredListRow>
                    <StructuredListCell>{props.props.time}</StructuredListCell>
                    <StructuredListCell>{props.props.title}</StructuredListCell>
                    {/* <StructuredListCell>
                      <Link
                        href="{item.link}"
                        target="_blank">
                       {props.props.speaker}
                      </Link>{' '}
                      |{' '}
                      {props.props.text}

      
                    </StructuredListCell> */}
                  </StructuredListRow>
  );
};

const BreakRow = props => {
  return (
    <StructuredListRow >
                    <StructuredListCell head>{props.props.time}</StructuredListCell>
                    <StructuredListCell head >{props.props.title}</StructuredListCell>
                    {/* <StructuredListCell>
                      <Link
                        href="{item.link}"
                        target="_blank">
                       {props.props.speaker}
                      </Link>{' '}
                      |{' '}
                      {props.props.text}
                    </StructuredListCell> */}
                  </StructuredListRow>
  );
};


const Instructor = props => {
  return (
    <Column lg={4} md={4} sm={4}>
      <Tile style={{ margin: '10px' }}>
        <Grid>
          <Column
            lg={{ start: 2, end: 4 }}
            md={{ start: 2, end: 4 }}
            sm={{ start: 2, end: 4 }}>
            <img
              style={{
                marginTop: '5px',
                marginBottom: '5px',
                borderRadius: '50%',
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image)}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
        <span style={{ textAlign: 'center' }}>
        <h6> <Link href={props.props.link} target="_blank">
            {props.props.name}
          </Link> </h6>

          <h6>{props.props.affiliation}</h6>
        </span>
      </Tile>
    </Column>
  );
};

const Speaker = props => {
  if (props.props.image === 'swaroop') {
    return (
      <Column lg={8} md={8} sm={4}>
        <Tile style={{ margin: '10px' }}>
          <Grid>
            <Column
              lg={{ start: 2, end: 8 }}
              md={{ start: 2, end: 8 }}
              sm={{ start: 2, end: 4 }}>
              <img
                style={{
                  marginTop: '5px',
                  marginBottom: '5px',
                  borderRadius: '50%',
                  marginLeft: '20%',
                  maxWidth: '60%',
                }}
                src={generateImageUrl(props.props.image)}
                alt="Carbon illustration"
              />
            </Column>
          </Grid>
          <span style={{ textAlign: 'center', maxWidth: '70%' }}>
          <h5> <Link href={props.props.link} target="_blank">
              <s>{props.props.name}</s>
            </Link> </h5>
            <h5><s>{props.props.affiliation}</s></h5>
            <h5>Talk canceled due to unforeseen circumstances.</h5>
           <CodeSnippet wrapText type="multi" hideCopyButton maxCollapsedNumberOfRows="4" style={{fontFamily: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif"}}>{props.props.bio}</CodeSnippet>
          </span>
        </Tile>
      </Column>
    );
  }
  return (
    <Column lg={8} md={8} sm={4}>
      <Tile style={{ margin: '10px' }}>
        <Grid>
          <Column
            lg={{ start: 2, end: 8 }}
            md={{ start: 2, end: 8 }}
            sm={{ start: 2, end: 4 }}>
            <img
              style={{
                marginTop: '5px',
                marginBottom: '5px',
                borderRadius: '50%',
                marginLeft: '20%',
                maxWidth: '60%',
              }}
              src={generateImageUrl(props.props.image)}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
        <span style={{ textAlign: 'center', maxWidth: '70%' }}>
        <h5> <Link href={props.props.link} target="_blank">
            {props.props.name}
          </Link> </h5>
          <h5>{props.props.affiliation}</h5>
         <CodeSnippet wrapText type="multi" hideCopyButton maxCollapsedNumberOfRows="4" style={{fontFamily: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif"}}>{props.props.bio}</CodeSnippet>
        </span>
      </Tile>
    </Column>
  );
};

export { Instructor, Reference, Advisor, ProgramRow, Speaker };
