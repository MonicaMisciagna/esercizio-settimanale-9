import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaHome, FaBookOpen } from 'react-icons/fa';

const YourComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
       
        <div className="col-2">
          <Navbar expand="md" className="navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
            <div className="nav-container">
              <Navbar.Brand href="index.html">
                <img src="./Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" className='my-4 mx-3'/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="navbar-nav">
                  <ul>
                    <li>
                      <Nav.Link ><FaHome className="bottonside me-1"/> Home</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link  ><FaBookOpen className="bottonside me-1"/> Your Library</Nav.Link>
                    </li>
                    <li>
                      <Form className="input-group mt-3">
                        <FormControl type="text" size="sm" className="form-control mb-2 " id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append" >
                          <Button variant="outline-secondary" size="sm" type="button" id="button-addon1">
                            GO
                          </Button>
                        </div>
                      </Form>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>

            <div className="nav-btn">
              <Button className="signup-btn" variant="light" type="button">Sign Up</Button>
              <Button className="login-btn" variant="dark" type="button">Login</Button>
              <a href="#">Cookie Policy </a> | <a href="#"> Privacy</a>
            </div>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
