import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Form, Table, Col, Container } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import Navigation from '../component/navigation';
import Tableuser from '../component/tableuser';
import Addnewuser from '../component/addnewuser';

const Userlist = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState([]);
  const [team, setTeam] = useState([]);
  const [email, setEmail] = useState([]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleTeam = (event) => {
    setTeam(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const addNewuser = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      full_name: name,
      email: email,
      password: 'password123',
      role: 'admin',
      id_team: 1,
    });

    var config = {
      method: 'post',
      url: 'https://virtserver.swaggerhub.com/iffakhry/alta-dashboard/1.0.0/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data);
        // getUsers()
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
              <a href="#">
                <ListGroup.Item active>User List</ListGroup.Item>
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
          <h2 className="text-center mt-5">USER LIST PAGE</h2>
          <hr className='mt-5' style={{color:'#0b3961', border: '1px solid' }}/>
          <Form className="d-flex justify-content-end mt-5">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ width: '200px' }} />
            <Button variant="outline-primary">Search</Button>

            <div>
              <Button className="ms-1" variant="primary" onClick={handleShow}>
                Add New
              </Button>
              <Addnewuser handleSubmit={(e) => addNewuser(e.target.value)} show={show} handleClose={handleClose} handleName={handleName} handleTeam={handleTeam} handleEmail={handleEmail} />
            </div>
          </Form>

          <div className="mt-5">
            <Tableuser />
          </div>
        </div>
      </div>
    </div>
  );
};

/* {profil.map((item, index) => {
    return <Tableuser nama={item.full_name} team={item.team} email={item.email} />;
  })} */

export default Userlist;
