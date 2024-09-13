import { Card } from 'react-bootstrap'
import './CardS.css'
import TitleComp from '../TitleComp/TitleComp'

export default function CardS({Cimg , Ctitle , Ctext}) {
  return (
    <Card className='cards border-0 p-3 d-flex flex-column justify-content-center align-items-center'>
      <div className='shadow  rounded-circle p-4'>
        <Card.Img variant="top" className='cardImg ' src={Cimg} />
      </div>
      <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
        <TitleComp
        Ttitle={Ctitle}
        Ts={'span'}
        Tp={Ctext}
        />
      </Card.Body>
    </Card>
  )
}
