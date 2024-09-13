import TitleComp from '../TitleComp/TitleComp'
import './EnimSection.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHandHoldingMedical } from "react-icons/fa";
import { boxData } from '../../data/EnimData';

export default function EnimSection({img}) {
  return (
    <section className='py-5'>
      <Container>
        <Row>
            <Col lg={6}>
               <img className='w-100 h-100' src={img} alt="Enim quis" />
            </Col>
            <Col lg={6} className='mt-4'>
                <TitleComp
                Ttitle={'Enim quis est voluptatibus aliquid consequatur fugiat'}
                Ts={'span'}
                Tp={'Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi'}
                />
                {boxData.map((e,i)=>
               {
                  return(               
                     <div key={i} className='d-flex mt-5'>
                        <div className='shadow p-3 me-5 h-75 rounded-2'>
                           <img src={e.icon} alt={e.title} className='icon' />
                        </div>
                        <div>
                        <h4>{e.title}</h4>
                        <p className='fs-6'>{e.text}</p>
                        </div>
                  </div>)
               })}


            </Col>
        </Row>
      </Container>
    </section>
  )
}
