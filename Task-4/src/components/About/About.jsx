import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import TitleComp from '../TitleComp/TitleComp'
import Gallery from '../Gallery/Gallery'
import { BsCheck2All } from "react-icons/bs";
import { AboutData } from '../../data/aboutData';

export default function About({p}) {
  return (
    <section className='about py-5' id='about'>
      <Container>
        <Row className='d-flex pb-5 text-center flex-column justify-content-center align-items-center'>
          <TitleComp 
            Ttitle={'About Us'}
            Ts={'span'}
            Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
          />
        </Row>
        <Row>
          <Col lg={6}>
            <Gallery />
          </Col>
          <Col lg={6} className='mt-4 '>
            <TitleComp 
              Ttitle={'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.'}
              Tp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
            />
            {AboutData.map((e,i)=>
            {
              return(
                <div key={i} className='d-flex align-it '>
                <BsCheck2All className='fs-5 c-icon'/>
                <p className='mx-2'>{e.textP}</p>
                </div>
              )
            })}
            <p>
              {p}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
