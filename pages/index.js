import React, { useState } from 'react';
import { Form, Button, Col, ListGroup } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from './component/navigation';

const Index = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goHome = () => {
    Router.push({
      pathname: '/dasboard/home',
      query: {
        username : `[ ${username} ]`,
        email: email,
        password: password,
      },
    });
  };

  return (
    <div style={{ minHeight: '80vh' }}>
      <Navigation />

      <div className="d-flex">
        <div className="col-md-3 col-sm-12" style={{ height: '100vh', color: 'white', backgroundColor: '#0275d8' }}>
          <div className="text-center mt-5 mb-5">
            <h1>LOGO</h1>
          </div>
          <hr style={{ width: '100%', border: '5px solid' }} />
          <div className="mt-4">
            <ListGroup variant="flush" className="list-custom">
              <a href="#">
                <ListGroup.Item>Dashboard</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>User</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Mentee</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Class</ListGroup.Item>
              </a>
            </ListGroup>
          </div>
        </div>

        <div className="col-md-9 col-sm-12">
          <h1 className="text-center mt-5">LOGIN PAGE</h1>

          <div>
            <div className="d-flex justify-content-center">
              <div className="mt-5" style={{ width: '45%', height: '60vh', backgroundColor: '#DCDCDC', borderRadius: '15px' }}>
                <div className="d-flex justify-content-center mt-5">
                  <Form style={{ width: '65%' }}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                      <Col className="d-flex justify-content-end me-2">
                        <a href="#" style={{ textDecoration: 'none' }}>
                          <Form.Text>Forgot Password ?</Form.Text>
                        </a>
                      </Col>
                    </Form.Group>

                    <Button className="w-100" variant="primary" onClick={() => goHome()}>
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
