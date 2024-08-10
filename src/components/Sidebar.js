import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "./styles.css"

const Sidebar = () => {
  return (<Nav className="sidebar bg-light flex-column p-4">
    <LinkContainer to="/">
      <Nav.Link className="link" activeclassname="active">Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/users">
      <Nav.Link className="link" activeclassname="active">User Listing</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/posts">
      <Nav.Link className="link" activeclassname="active">Post Listing</Nav.Link>
    </LinkContainer>
  </Nav>
  );
};

export default Sidebar;