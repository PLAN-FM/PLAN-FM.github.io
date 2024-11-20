import React from 'react';
import { Document } from '@carbon/icons-react';
import {
  Grid,
  Column,
  StructuredListRow,
  StructuredListCell,
  Tile,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  Link,
} from '@carbon/react';

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
    <TableHeader key={props.props.key}>{props.props.title}</TableHeader>
   </TableRow>
   }
  return (
    <TableRow key={props.props.key}>
           <TableCell key={props.props.key}>{props.props.time}</TableCell>
           <TableCell key={props.props.key}>{props.props.title}</TableCell>
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
                marginTop: '20px',
                marginBottom: '20px',
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

export { Instructor, Reference, Advisor, ProgramRow };
