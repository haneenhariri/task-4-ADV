import { Accordion, Col, Container, Row } from 'react-bootstrap'
import './fq.css'
import TitleComp from '../TitleComp/TitleComp'
import AccordionS from '../AccordionS/AccordionS'


export default function Fq() {
  return (
    <section className='py-5 fq'>
    <Container>
        <Row className='d-flex flex-column align-items-center text-center '>
           <TitleComp
           Ttitle={'Frequently Asked Questions'}
           Ts={'span'}
           Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
           />
        </Row>
        <Row className='my-5 justify-content-center'>
          <Col lg={10}>
          <AccordionS/>
          </Col>
        </Row>
    </Container>

    </section>
  )
}
