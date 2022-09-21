import React from 'react';
import { Button, Table, Col } from 'react-bootstrap';

const Tableclass = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Front End Engineer Batch-8</td>
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
            <td>Back End Engineer Batch-11</td>
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
            <td>Quality Assurance Batch-5</td>
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

export default Tableclass;
