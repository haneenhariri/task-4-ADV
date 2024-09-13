import './InfoNav.css'
import { IoMdTime } from "react-icons/io";
import { BsPhone } from "react-icons/bs";
import { Container } from 'react-bootstrap';

export default function InfoNav({time, call}) {
  return (
    <section className='text-light info-nav py-2'>
        <Container className='d-flex justify-content-md-between justify-content-center align-items-center'>
          <div className='d-md-flex d-none  align-items-center'>
              <IoMdTime  className='fs-4'/>
              <p className='my-0 mx-2 '>{time}</p>
          </div>
          <div className='d-flex align-items-center'>
              <BsPhone className='fs-5'/>
              <p className='my-0 mx-2'>{call}</p>
          </div>
        </Container>
    </section>
  )
}
