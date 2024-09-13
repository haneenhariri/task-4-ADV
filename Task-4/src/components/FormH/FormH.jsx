import {  Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './FormH.css'
import Btn from '../Btn/Btn';

export default function FormH() {
  return (
    <Form  noValidate className='text-center' >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Control
            required
            type="text"
            placeholder="Your Name"
            className='p-2'
        />
        </Form.Group>
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Control
            required
            type="email"
            placeholder="Your Email"
            className='p-2'
        />
        </Form.Group>
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Control
            required
            type="text"
            placeholder="Your Phone"
            className='p-2'
        />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Control
            required
            type="datetime-local"
            placeholder="Your Name"
            className='p-2'
        />
        </Form.Group>
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Select className='p-2'>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" className='my-3' >
        <Form.Select className='p-2'>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} xl="12" className='my-3'>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            className='p-2'
            />
            </FloatingLabel>

        </Form.Group>
      </Row>
      <div className='mt-5 d-flex justify-content-center' >
        <Btn  btnText={'Make an Appointment'}/>
      </div>
    </Form>
  )
}
