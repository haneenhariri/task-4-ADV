
import { Button } from 'react-bootstrap'
import './Btn.css'

export default function Btn({btnText}) {
  return (
    <Button className='btnColor btn-outline-light text-wrap fs-6'>{btnText}</Button>
  )
}
