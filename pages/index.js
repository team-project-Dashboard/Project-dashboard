import React, { useState } from 'react';
import { Form, Button, Col, ListGroup } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from './component/navigation';

const Index = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goDashboard = () => {
    Router.push({
      pathname: '/dasboard/dashboard',
      query: {
        username: `[ ${email} ]`,
        email: email,
        password: password,
      },
    });
  };

  const handleLogin = () => {
    var axios = require('axios');
    var haha = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: 'post',
      url: 'https://virtserver.swaggerhub.com/iffakhry/alta-dashboard/1.0.0/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: haha,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        goDashboard();
      })
      .catch(function (error) {
        console.log(error);
        alert('post api error / axios error');
      });
  };

  return (
    <div style={{ minHeight: '80vh' }}>
      <Navigation />

      <div className="d-flex">
        <div className="col-md-3 col-sm-12" style={{ height: '100vh', color: 'white', backgroundColor: '#0c60aa' }}> 
          <div className="text-center mt-5 mb-5">
            <img
              className="img-custom"
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/49606012_224917678413320_8622242173519134720_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vVq3cVamYGAAX-f5Kbp&_nc_ht=scontent-sin6-3.xx&oh=00_AT_zyUMQAANsxT3V4-unXDvt4swB0k5HjW9vZMJ8VBAZUQ&oe=6353698E"
              alt="no pict"
            />
          </div>
          <hr style={{ width: '100%', border: '5px solid' }} />
          <div className="mt-4">
            <ListGroup variant="flush" className="list-custom">
              <a href="#">
                <ListGroup.Item>Dashboard</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>User List</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Mentee List</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Class List</ListGroup.Item>
              </a>
            </ListGroup>
          </div>
        </div>

        <div className="col-md-9 col-sm-12">
          <h2 className="text-center mt-5">LOGIN PAGE</h2>
          <hr className='mt-5' style={{color:'#0b3961', border: '1px solid' }}/>
          <div>
            <div className="d-flex justify-content-center">
              <div className="mt-4" style={{ width: '45%', height: '60vh', backgroundColor: '#DCDCDC', borderRadius: '15px' }}>
                <div className="d-flex justify-content-center" style={{marginTop:'80px'}}>
                  <Form style={{ width: '65%' }}>
                    {/* <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group> */}

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

                    <Button className="w-100" variant="primary" onClick={() => handleLogin()}>
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
