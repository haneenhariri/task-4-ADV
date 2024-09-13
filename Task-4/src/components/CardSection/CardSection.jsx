import { Col, Container, Row } from 'react-bootstrap'
import './CardSection.css'
import CardH from '../CardH/CardH'
import { cardData } from '../../data/cardSectionData'
export default function CardSection() {
  return (
    <section>
       <Container>
         <Row  className='py-5'>
            {cardData.map((i,ndx)=>
            {
                return(
                  <Col key={ndx} className='my-3 mt-lg-3 mt-md-3 mt-sm-3' xl={3} md={6} sm={12}>
                    <CardH 
                    Cimg={i.cardImg}
                    Ctitle={i.cardTitle}
                    Ctext={i.cardText}/>
                  </Col>
                )
            })}
         </Row>
       </Container>
    </section>
  )
}
