import React, { useState, useEffect } from 'react';
import { Button, Table, Col } from 'react-bootstrap';

const Tableuser = () => {
  const [profil, setProfil] = useState([]);

  const getUsers = () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/iffakhry/alta-dashboard/1.0.0/users',
      headers: {
        Authorization: `Bearer ${data.token}`,
        // Authorization: 'Bearer 11234567890', --> id hasil dari post login
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setProfil(response.data.data);
        console.log(profil);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {/* <Table striped bordered hover>    */}
      <Table striped>
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Team</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {profil.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.full_name}</td>
                <td>{item.team}</td>
                <td>{item.email}</td>
                <td>admin</td>
                <td>active</td>
                <td>
                  <Button variant="warning" className="me-2" size="sm">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Col className="d-flex justify-content-end">
        <Button variant="dark" className="me-1" size="sm">
          prev
        </Button>
        <Button variant="dark" size="sm">
          next
        </Button>
      </Col>
    </div>
  );
};

export default Tableuser;
