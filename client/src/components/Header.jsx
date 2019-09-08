import React from 'react';
import logo from '../icons/Logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      style={{ borderBottom: '1px solid gray' }}
    >
      <Navbar.Brand href="#home">
        <a className="my-0 mr-md-auto font-weight-normal" href="/">
          <img style={{ width: '45px', height: '45px' }} src={logo} alt={''} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <Nav className="mr-auto">
          <Nav.Link style={{ fontSize: '1.1em' }} href="/">
            Raziskuj
          </Nav.Link>
          <Nav.Link style={{ fontSize: '1.1em' }} href="/books">
            Knjižnica
          </Nav.Link>
          <Nav.Link style={{ fontSize: '1.1em' }} href="/home">
            Domov
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Išči" className="mr-sm-2" />
          <Button href="/rezultati" variant="outline-info">
            Išči
          </Button>
        </Form>
        {/* <Nav>
          <Nav.Link></Nav.Link>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

{
  /* <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <a className="my-0 mr-md-auto font-weight-normal" href="/">
          <img style={{ width: '45px', height: '45px' }} src={logo} alt={''} />
        </a>

        <nav className="my-2 my-md-0 mr-md-3">
          <input
            style={{ display: 'inline' }}
            type="text"
            class="search-input"
            placeholder="Išči"
          />

          <a
            style={{ margin: '0% 2.6rem', 'font-size': '1.5em' }}
            className="fa-2x text-dark"
            href="/"
          >
            <i className="fa fa-search" />
          </a>
          <a
            style={{ margin: '0% 2.6rem', 'font-size': '1.5em' }}
            className="text-dark"
            href="/books"
          >
            <i className="fa fa-book" />
          </a>
          <a
            style={{ margin: '0% 2.6rem', 'font-size': '1.7em' }}
            className="text-dark"
            href="/home"
          >
            <i class="fa fa-home" />
          </a>
        </nav>
      </div> */
}
