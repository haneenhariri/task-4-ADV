import { Container,  Row } from 'react-bootstrap'
import './Appointment.css'
import TitleComp from '../TitleComp/TitleComp'
import FormH from '../FormH/FormH'

export default function Appointment() {
  return (
    <section id='appointment' className='appointment py-5'>
      <Container>
        <Row className='d-flex flex-column justify-content-center align-items-center text-center'>
            <TitleComp
             Ttitle={'MAKE AN APPOINTMENT'}
             Ts={'span'}
             Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
        </Row>
        <Row className='my-5'>
            <FormH/>
        </Row>
      </Container>
    </section>
  )
}
