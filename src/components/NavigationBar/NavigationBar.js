import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/home" style={{textDecoration: "none"}}>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link> <Link to="/create" style={{textDecoration: 'none', color: 'black'}}>Create</Link></Nav.Link>
            <Nav.Link> <Link to="/obtain-all" style={{textDecoration: 'none', color: 'black'}}>Obtain All</Link></Nav.Link>
            <Nav.Link> <Link to="/filter" style={{textDecoration: 'none', color: 'black'}}>Filter</Link></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;

