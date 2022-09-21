import React from 'react';
import { Button, ListGroup, Form, Col, Container } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from '../component/navigation';
import Tableuser from '../component/tableuser';

const Userlist = () => {
  const router = useRouter();

  const fromUser = 'Sukses Logout';
  const goIndex = () => {
    Router.push({
      pathname: '/',
      query: {
        alamat: fromUser,
      },
    });
    alert('are you sure want to quit ?');
  };

  const goHome = () => {
    Router.push({
      pathname: './home',
      query: {
        username: router.query.username,
      },
    });
  };

  return (
    <div>
      <Navigation userAccount={router.query.username}/>

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
                <ListGroup.Item active>User</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Mentee</ListGroup.Item>
              </a>
              <a href="#" onClick={() => goHome()}>
                <ListGroup.Item>Class</ListGroup.Item>
              </a>
            </ListGroup>
          </div>
        </div>

        <div className="col-md-9 col-sm-12 container">
          <h1 className="text-center mt-5">USERLIST PAGE</h1>
          <Form className="d-flex justify-content-end mt-4">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ width: '200px' }} />
            <Button variant="outline-primary">Search</Button>
            <Button className="ms-1" variant="primary">
              Add New
            </Button>
          </Form>

          <div className="mt-5">
            <Tableuser />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Button onClick={() => goIndex()} variant="danger">Logout</Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Userlist;
