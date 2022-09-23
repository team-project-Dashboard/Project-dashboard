import Layout from "../components/Layout";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";




function addmente () {

    return (
        <Layout>    
        <div >
            <h1>Immersive Dashboard</h1>
            <h3>Add New Mentee</h3>
            <div className="border-2 border-[#fafafa] w-full bg-[#fafafa] inline-block"></div>
        </div>
        <div className="flex  min-h-0 ">
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="name" placeholder="name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHAddress">
        <Form.Label column sm={2}>
          Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="address" placeholder="address" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHomeAddress">
        <Form.Label column sm={2}>
          Home Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="homeaddress" placeholder="address" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="email" />
        </Col>
      </Form.Group>
    </Form>
        </div>
        <div className="">
            <h5>Gender</h5>
            <br />
            <div className="flex w-64 mb-5">
            <label className="flex items-center text-xs">
              <input type="radio" name="remember" className="mr-1"/>Male
            </label>
          </div>
          <div className="flex w-64 mb-5">
            <label className="flex items-center text-xs">
              <input type="radio" name="remember" className="mr-1"/>Female
            </label>
          </div>
          <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPhone">
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="phone" placeholder="phone" />
        </Col>
      </Form.Group>
    </Form>
    <div>
        <h1>Emergency Data</h1>
        <br />
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="Name" placeholder="name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPhone">
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="phone" placeholder="phone" />
        </Col>
      </Form.Group>
    </Form>
    </div>
    <Button className="bg-[#fafafa] w-1/12 rounded-md hover:bg-[#1d4ed8] hover:text-[#ecfeff]">cancel</Button>{' '}
    <Button className="bg-[#1d4ed8] text-[#fafafa] w-1/12 rounded-md hover:bg-[#fafafa] hover:text-[#0f172a]">save</Button>{' '}
      </div>
        </Layout>
    )
}

export default addmente;