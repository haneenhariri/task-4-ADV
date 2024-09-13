import './Testimonials.css'
import TitleComp from '../TitleComp/TitleComp'
import { Container, Row } from 'react-bootstrap'
import SwiperUser from '../SwiperUser/SwiperUser'

export default function Testimonials() {
  return (
    <section className='py-5'>
        <Container>
            <Row className='d-flex flex-column text-center align-items-center justify-content-center'>
            <TitleComp
            Ttitle={'Testimonials'}
            Ts={'span'}
            Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
            </Row>
            <Row className='my-5'>
              <SwiperUser/>
            </Row>
        </Container>
    </section>
  )
}
