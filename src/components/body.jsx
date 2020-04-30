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
            <p>First of all, thanks to everyone who took the time to fill out this year's survey. Obviously it's been a crazy last couple of months for everyone, and it's so gratifying to see the people willing to give their time and share their knowledge and experiences for the greater community Ok, let's get to it!</p>
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
              <li>Demographic takeaway</li>
              <li>Mainline health</li>
              <li>Staying on sched</li>
              <li>Direct reports</li>
              <li>Perf reviews</li>
              <li>Tech hiring</li>
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