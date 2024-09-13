import { Card, Col } from 'react-bootstrap'
import './UserCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function UserCard({img,span,title,text}) {
  return (
    <Card className='border-0 p-3 ' >
      <div className='p-3 pb-5 bg-light'>
         <span className='text'>
          <FontAwesomeIcon icon={faQuoteLeft} className='me-2 fs-6 icon-quot'/>
            {span}
          <FontAwesomeIcon icon={faQuoteRight} className='mx-2 fs-6 icon-quot'/>
        </span>
      </div>
      <Card.Body className='p-4 pt-5  position-relative'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        <div className='user mx-2  rounded-circle position-absolute     '>
        <img className='w-100 rounded-circle' src={img} alt={title} />
      </div>
      </Card.Body>
     
    </Card>
  )
}
