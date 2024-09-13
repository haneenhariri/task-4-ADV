import { Card } from 'react-bootstrap'
import './CardH.css'

export default function CardH({Cimg , Ctitle , Ctext}) {
  return (
    <Card className='px-4 py-5 h-100 border-0 d-flex shadow '>
      <Card.Img  variant="top" src={Cimg} className='cardImg' />
      <Card.Body className='px-0'>
        <Card.Title className='fs-4 cTitle'>{Ctitle}</Card.Title>
        <Card.Text>
            {Ctext}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
