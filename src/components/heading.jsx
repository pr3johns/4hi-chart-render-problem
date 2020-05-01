import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo_copy.png';

export default function Heading() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt=""
        />
        &nbsp; 2020 Annual Tech Leader Survey
      </Navbar.Brand>
    </Navbar>
  );
}