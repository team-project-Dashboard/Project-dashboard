import React, { useState, useEffect } from 'react';
import { Button, Table, Col } from 'react-bootstrap';

const Tableclass = () => {
  const [listclass, setListclass] = useState([]);

  const getListclass = () => {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'https://virtserver.swaggerhub.com/iffakhry/alta-dashboard/1.0.0/classes',
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setListclass(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        alert('gagal akses api');
      });
  };
  useEffect(() => {
    getListclass();
  }, []);

  return (
    <div>
      {/* <Table striped bordered hover> */}
      <Table striped>
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Pic</th>
            <th>Start Date</th>
            <th>Graduate Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listclass.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.pic}</td>
                <td>{item.start_date}</td>
                <td>{item.graduate_date}</td>
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

export default Tableclass;
