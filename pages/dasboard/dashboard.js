import React, { useState, useEffect } from 'react';
import { Button, Table, Col, ListGroup, Form } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from '../component/navigation';

const Dashboard = () => {
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

  const goUser = () => {
    Router.push({
      pathname: './userlist',
      query: {
        username: router.query.username,
      },
    });
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
                <ListGroup.Item active>Dashboard</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item onClick={() => goUser()}>User List</ListGroup.Item>
              </a>
              <a href="#">
                <ListGroup.Item>Mentee List</ListGroup.Item>
              </a>
              <a href="#" onClick={() => goHome()}>
                <ListGroup.Item>Class List</ListGroup.Item>
              </a>
            </ListGroup>
            <div className="d-flex justify-content-center mt-5">
              <Button onClick={() => goIndex()} variant="dark">
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="col-md-9 col-sm-12 container">
          <h2 className="text-center mt-5">DASHBOARD PAGE</h2>
          <hr className="mt-5" style={{ color: '#0b3961', border: '1px solid' }} />
          <div className="d-flex justify-content-around mt-5">
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0c60aa', width: '200px', height: '150px', borderRadius: '20px', color: 'white' }}>
              <h6>Mentee Active : 10</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0c60aa', width: '200px', height: '150px', borderRadius: '20px', color: 'white' }}>
              <h6>Mentee Placement : 5</h6>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0c60aa', width: '200px', height: '150px', borderRadius: '20px', color: 'white' }}>
              <h6>Mentee Feedback : 3</h6>
            </div>
          </div>
          <div className="border border-4 mt-5" style={{ width: '89%', height: '300px', marginLeft: '50px' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '50px', color: 'white', backgroundColor: '#0b3961' }}>
              <h5>Statistic Mentee</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
