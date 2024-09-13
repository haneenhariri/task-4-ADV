import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'
import TitleComp from '../TitleComp/TitleComp'
import { cardDataS } from '../../data/cardSectionData'
import CardS from '../CardS/CardS'

export default function Services() {
  return (
    <section className='py-5' id='services'>
        <Container>
            <Row className='d-flex pb-5 text-center flex-column justify-content-center align-items-center'>
            <TitleComp
            Ttitle={'Services'}
            Ts={'span'}
            Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
            </Row>
            <Row>
                {cardDataS.map((e,i)=>
                {
                    return(
                        <Col key={i} className=' mt-lg-3 mt-md-5 mt-sm-5' xl={4} md={6} sm={12}>
                            <CardS
                            Cimg={e.cardImg}
                            Ctitle={e.cardTitle}
                            Ctext={e.cardText}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}
