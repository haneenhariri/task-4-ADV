import TitleComp from '../TitleComp/TitleComp'
import './Pricing.css'
import { Col, Container, Row } from 'react-bootstrap'
import { pricingCard } from '../../data/cardSectionData'
import PricingCard from '../PricingCard/PricingCard'

export default function Pricing() {
  return (
    <section className='py-5'>
      <Container>
        <Row className='d-flex flex-column justify-content-center align-items-center text-center'>
            <TitleComp
            Ttitle={'Pricing'}
            Ts={'span'}
            Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
        </Row>
        <Row className='my-5'>
          {pricingCard.map((e,i)=>
          {
            return(
              <Col key={i} lg={3} md={6} className='mt-4'>
                <PricingCard
                 head={e.head}
                 title={e.prici}
                 span={e.span}
                 p1={e.p1}
                 p2={e.p2}
                 p3={e.p3}
                 p4={e.line[0].p4}
                 p5={e.line2[0].p5}
                 btn={e.btn}
                 class1={e.line[1]?.class1}
                 class2={e.line[1]?.class2}
                 class3={e.class3}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
