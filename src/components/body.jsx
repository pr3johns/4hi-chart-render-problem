import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function Body() {
  return (
    <Accordion class="accordion" defaultActiveKey="0">

      <Card bg="dark">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <strong>Introduction</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body variant="foo">
            <p>First of all, thanks to all 163 tech leaders who took the time to fill out this year's survey. Obviously it's been a crazy last couple of months for everyone, and it's so gratifying to see the people willing to give their time and share their knowledge and experiences for the greater community Ok, let's get to it!</p>
            <p>&nbsp; &mdash; Agustin and Paul</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark">
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <strong>Executive Summary</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li>43% of our respondents work in companies with $10M to $100M ARR. We've taken to calling this stage in the tech company growth cycle the <q>uncanny valley</q>. Too big to just wing it, but still too small to have put together reliable processes. Lots of companies stall at this stage, the transition from <strong>informal collaboration</strong> into <strong>reliable large-scale execution</strong>. </li>
              <li>Mainline health</li>
              <li>Small (under $10M ARR) and large (over $100M ARR) mostly manage to ship on schedule. But within that <strong>uncanny valley</strong>, companies can struggle. The data shows that companies which focus on velocity do stay on-schedule better. So, let's focus on speed this year!</li>
              <li>Almost everyone wants fewer direct reports. But how do we get there? Survey data shows a possible path: technical manager training. If this is you, check out the details on how your peers have done this cost-effectively and time-efficiently.</li>
              <li>Another thing we all seem to want is more-frequent performance reviews. Turns out the path to better feedback and more engagement is paved with lightweight and efficient <strong>review processes</strong>. It's much easier to review frequently if you don't have to reinvent the wheel each time!</li>
              <li>The survey shows two clear paths to growing your team through hiring. One involves a reliance on external recruiters and other outside help, and the other involves in-house interviewer training. They both work, but one is definitely more scalable than the other.</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <strong>Demographics: Who We Are</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="3">
          <strong>Mainline Health: The Gift That Keeps Giving</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="4">
          <strong>Staying On Schedule: Mind Your Velocity</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="5">
          <strong>Direct Reports: We Want Fewer!</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="6">
          <strong>Performance Reviews: Why So Infrequent?</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card bg="dark" text="white">
        <Accordion.Toggle as={Card.Header} eventKey="7">
          <strong>Technical Hiring: Two Paths</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
            Hello! I'm another body
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
  );
}