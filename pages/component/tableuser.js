import React from 'react';
import { Button, Table, Col } from 'react-bootstrap';

const Tableuser = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Team</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Dian</td>
            <td>dian@gmail.com</td>
            <td>people</td>
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
          <tr>
          <td>2</td>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>placement</td>
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
          <tr>
          <td>3</td>
            <td>John Doe</td>
            <td>john@gmail.com</td>
            <td>admission</td>
            <td>default</td>
            <td>non-active</td>
            <td>
              <Button variant="warning" className="me-2" size="sm">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Col className="d-flex justify-content-end">
        <Button variant="secondary" className="me-1" size="sm">
          prev
        </Button>
        <Button variant="secondary" size="sm">
          next
        </Button>
      </Col>
    </div>
  );
};

export default Tableuser;
