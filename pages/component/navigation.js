import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = ({ userAccount }) => {
  return (
    <div>
      <Navbar className="nav-custom" variant="dark" /* bg="dark" variant="dark" style={{ backgroundColor: '#000080', color: '#F5FFFA' }}*/>
        <Container>
          <div>
            <Navbar.Brand href="#home">Dashboard App</Navbar.Brand>
          </div>

          <div className="float-right">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <div className="vr bg-light ms-2"></div>
              <Nav.Link href="#" className="ms-2">
                {' '}
                Welcome ! {userAccount}
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
