import './CardA.css'
import { Card } from 'react-bootstrap'


export default function CardA({Cimg , Ctitle , Ctext}) {
  return (
    <div>
      <Card className=' rounded-0 py-3 h-100 border-0 d-flex  shadow'>
        <Card.Body className='d-flex align-items-center gap-3 justify-content-lg-start'>
            <div><img className='cardImgh mx-3' src={Cimg} alt={Cimg} /></div>
            <div>
            <Card.Title className='fs-1  cTitle fw-bold'>{Ctitle}</Card.Title>
            <Card.Text>
                {Ctext}
            </Card.Text>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}
