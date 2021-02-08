// import Nav from 'Nav';
import React from 'react';
import {Nav, Navbar, Form, FormControl, Button,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './img/logo.jpg';

function Header() {
    return(
        <div>
            <Navbar bg="light" expand="lg" cl="white">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <section class="logo">
                    <img src={logo} alt="burger"  height="5px"/>
                    <h6>Fast food</h6>
                </section>
                <Link to="/">
                 <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                
                <Link to="/pages">
                 <Nav.Link href="{% App pages.js %}">Pages</Nav.Link>
                </Link>

                <Link to="/Mubarak">
                 <Nav.Link href="{% App me.js %}">Our Offers</Nav.Link>
                </Link>

                <Link to="/gallery">
                 <Nav.Link href="{% App gallery.js %}">Menu</Nav.Link>
                </Link>

                <Link to="/blog">
                 <Nav.Link href="{% App blog.js %}">Blog</Nav.Link>
                </Link>

                  <Link to="/shop">
                 <Nav.Link href="{% App shop.js %}">Shop</Nav.Link>
                </Link>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
         
        </div>
    );
}

export default Header;