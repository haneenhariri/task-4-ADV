import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import ContactIframe from '../ContactIframe/ContactIframe'
import TitleComp from '../TitleComp/TitleComp'
import Box from '../Box/Box'
import FormC from '../FormC/FormC'

export default function Contact() {
  return (
    <section className='py-5'>
      <Container>
        <Row className='d-flex flex-column align-items-center text-center mb-5'>
          <TitleComp
          Ttitle={'Contact'}
          Ts={'span'}
          Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
          />
        </Row>
        </Container>
          <ContactIframe/>
        <Container className='pt-5'>
        <Row className='py-5'>
          <Col lg={6}>
            <Col lg={12}>
               <Box
               img={'./images/boxIcon/download (5).svg'}
               title={'Address'}
               text={'A108 Adam Street, New York, NY 535022'}
               />
            </Col>
            <Row className='my-4'>
              <Col lg={6}>
              <Box
               img={'./images/boxIcon/download (6).svg'}
               title={'Call Us'}
               text={'+1 5589 55488 55'}
               />
              </Col>
              <Col lg={6}>
              <Box
               img={'./images/boxIcon/download (7).svg'}
               title={'Email Us'}
               text={'info@example.com'}
               /></Col>
            </Row>
          </Col>
          <Col lg={6} >
            <FormC/>
          </Col>
        </Row>
        </Container>

      
    </section>
  )
}
