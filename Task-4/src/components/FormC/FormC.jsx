import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Btn from '../Btn/Btn'


export default function FormC() {
  return (
    <Form className="  p-4 shadow" noValidate >
        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Your name"
            className=" rounded-0 mb-4"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="email"
            placeholder="Your email"
            className=" rounded-0 mb-4"
          />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Subject"
            className=" rounded-0 mb-4"
          />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} xl="12" className='my-3'>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '140px' }}
            className='p-2 mb-0'
            />
            </FloatingLabel>

        </Form.Group>
        </Row>
        <div className="m-3 d-flex justify-content-center">
            <Btn btnText={'Send Message'}/>
        </div>
    </Form>
  )
}
