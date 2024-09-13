import { Col, Nav, Row, Tab } from 'react-bootstrap'
import './TabsCom.css'
import { tabsData } from '../../data/tabsData'

export default function TabsCom() {
  return (
    <Tab.Container defaultActiveKey="ophthalmologists">
    <Row>
      <Col lg={3} className='my-3'>
        <Nav  className="flex-column">
          {tabsData.map((e,i)=>
          {
            return(
            <Nav.Item key={i}>
              <Nav.Link eventKey={e.event} className='py-2 fw-semibold'>{e.h3}</Nav.Link>
            </Nav.Item>
            )
          })}
        </Nav>
      </Col>
      <Col lg={9} className='my-3' >
        <Tab.Content>
          {tabsData.map((e,i)=>
          {
            return(
              <Tab.Pane key={i} eventKey={e.event}>
              <Row >
              <Col lg={8} className='order-2 order-lg-1 my-3'>
              <h3>{e.h3}</h3>
              <p>{e.p1}</p>
              <p>{e.p2}</p>
              </Col>
              <Col lg={4} className=' text-center order-1 order-lg-2 my-3'>
              <img className='img-fluid' src={e.img} alt="Cardiology" />
              </Col>
              </Row>
            </Tab.Pane>
            )
          })}
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  )
}
