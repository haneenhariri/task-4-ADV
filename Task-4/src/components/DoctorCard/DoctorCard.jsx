import { Card } from 'react-bootstrap'
import './DoctorCard.css'

export default function DoctorCard({img,title,text}) {
  return (
    <Card className='border-0 shadow'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
