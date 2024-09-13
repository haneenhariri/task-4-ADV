import { cardDoctors } from '../../data/cardSectionData'
import DoctorCard from '../DoctorCard/DoctorCard'
import TitleComp from '../TitleComp/TitleComp'
import './Doctors.css'
import { Col, Container, Row } from 'react-bootstrap'


export default function Doctors() {
  return (
    <section className='doctors py-5'>
        <Container>
            <Row className='text-center d-flex flex-column justify-content-center align-items-center'>
            <TitleComp
            Ttitle={'Doctors'}
            Ts={'span'}
            Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
            </Row>
            <Row>
                {cardDoctors.map((e,i)=>
                {
                    return(
                        <Col key={i} lg={3} md={6} className='my-3'>
                            <DoctorCard
                            img={e.img}
                            title={e.title}
                            text={e.text}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}
