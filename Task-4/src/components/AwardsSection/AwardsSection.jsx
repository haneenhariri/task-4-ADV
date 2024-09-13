import { Col, Container, Row } from 'react-bootstrap'
import './AwardsSection.css'
import CardA from '../CardA/CardA'
import { cardDataA } from '../../data/cardSectionData'

export default function AwardsSection() {
  return (
    <section className='py-5'>
        <Container>
            <Row>
              {cardDataA.map((e,i)=>
              {
                return(
                  <Col key={i} className='mt-5 mt-lg-5 mt-md-5 mt-sm-5' xl={3} md={6} sm={12}>
                  <CardA 
                   Cimg={e.cardImg}
                   Ctitle={e.cardTitle}
                   Ctext={e.cardText}
                   />
                </Col>
                )
              })}

            </Row>
        </Container>
    </section>
  )
}
