import { Card } from 'react-bootstrap';
import './PricingCard.css';
import Btn from '../Btn/Btn';

export default function PricingCard({ head, title, span, p1, p2, p3, p4, p5, btn, class1, class2 }) {
  return (
    <Card className=" card border-0 shadow-sm text-center" >
      <Card.Header className='head fs-6  fw-semibold p-3 border-0' >{head}</Card.Header>
      <Card.Body>
        <Card.Title>
          <h3> <sup>$</sup> {title} <span className='fs-6'>{span}</span></h3>
        </Card.Title>
        <Card.Text>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p className={ class1 ? class1 : ''}>{p4}</p> 
          <p className={ class2 ? class2 : ''}>{p5}</p> 
        </Card.Text>
      </Card.Body>
      <Card.Footer className=" p-3 border-0 text-muted">
        <Btn btnText={btn}/>
      </Card.Footer>
    </Card>
  );
}
