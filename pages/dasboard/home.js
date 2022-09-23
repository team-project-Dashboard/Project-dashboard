import React from 'react';
import { Button, ListGroup, Form, Col, Container } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from '../component/navigation';
import Tableclass from '../component/tableclass';

const Home = () => {
  const router = useRouter();

  const fromHome = 'Sukses Logout';
  const goIndex = () => {
    Router.push({
      pathname: '/',
      query: {
        alamat: fromHome,
      },
    });
    alert('are you sure want to quit ?');
  };

  const goUser = () => {
    Router.push({
      pathname: './userlist',
      query: {
        username: router.query.username,
      },
    });
  };

  const goDashboard = () => {
    Router.push({
      pathname: './dashboard',
      query: {
        username: router.query.username,
      },
    });
  };

  return (
    <div>
      <Navigation userAccount={router.query.username} />

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
                <ListGroup.Item onClick={() => goDashboard()}>Dashboard</ListGroup.Item>
              </a>
              <a href="#" onClick={() => goUser()}>
                <ListGroup.Item>User List</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Mentee List</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item active>Class List</ListGroup.Item>
              </a>
            </ListGroup>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Button onClick={() => goIndex()} variant="dark">
              Logout
            </Button>
          </div>
        </div>

        <div className="col-md-9 col-sm-12 container">
          <h2 className="text-center mt-5">CLASS LIST PAGE</h2>
          <hr className='mt-5' style={{color:'#0b3961', border: '1px solid' }}/>
          <Form className="d-flex justify-content-end mt-5">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ width: '200px' }} />
            <Button variant="outline-primary">Search</Button>
            <Button className="ms-1" variant="primary">
              Add New
            </Button>
          </Form>

          <div className="mt-5">
            <Tableclass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
