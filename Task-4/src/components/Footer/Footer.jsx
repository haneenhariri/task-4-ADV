import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { footerData } from '../../data/footerData'

export default function Footer() {
  return (
    <footer className=' footer'>
       <Container >
          <Row className=' py-5'>
            <Col lg={4}>
               <h3><a href="/home" className=' text-dark text-decoration-none'>Medicio</a></h3>
               <p>A108 Adam Street</p>
               <p>New York, NY 535022</p>
               <p><span className=' fw-bold'>Phone:</span>+1 5589 55488 55</p>
               <p><span className=' fw-bold'>Email:</span>info@example.com</p>
               <div>

               </div>
            </Col>
            {footerData.map((e,i)=>
            {
              return(
                <Col key={i} lg={2}>
                  <h4 className='fs-5'>{e.title}</h4>
                  <ul className=' list-unstyled'>
                    <li className='my-2'><a className=' text-decoration-none text-dark' href="/home">{e.li1}</a></li>
                    <li className='my-2'><a className='  text-decoration-none text-dark' href="/about">{e.li2}</a></li>
                    <li className='my-2'><a className='  text-decoration-none text-dark' href="/serves">{e.li3}</a> </li>
                    <li className='my-2'><a className='  text-decoration-none text-dark' href="#">{e.li4}</a></li>
                    <li className='my-2'><a className='  text-decoration-none text-dark' href="#">{e.li5}</a></li>
                  </ul>
                </Col>
              )
            })}
          </Row>
          <Row className=' border-top p-4 text-center'>
            <p className='p-0 m-0'>© Copyright <span className=' fw-bold'>Medicio</span> All Rights Reserved</p>
            <p className='mt-2 mb-0'> Designed by <a className='email text-decoration-none' href="mailto:haneenhariry8@gmail.com">Haneen Al-Hariri</a></p>
          </Row>
       </Container>
    </footer>
  )
}
