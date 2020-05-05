import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo_copy.png';
import useWindowDimensions from '../windowDimensions';

export default function Heading() {
  const { height, width } = useWindowDimensions();

  console.log('Width');
  console.log(width);
  return (
    (width < 500) ?
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt=""
          />
          <br></br>2020 Annual Tech<br></br>Leader Survey
        </Navbar.Brand>
      </Navbar>
    :
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp; 2020 Annual Tech Leader Survey
        </Navbar.Brand>
      </Navbar>

);
}