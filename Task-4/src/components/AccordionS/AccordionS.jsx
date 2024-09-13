import './AccordionS.css'
import { Accordion } from 'react-bootstrap'
import { accordion } from '../../data/accordionsData'

export default function AccordionS() {
  return (

    <Accordion>
        {accordion.map((e,i)=>
        {
            return(
              <Accordion.Item key={i} className='  mt-3 p-2 border-1 border-top rounded-0' eventKey={i.toString()}>
                <Accordion.Header className=''>{e.head}</Accordion.Header>
                <Accordion.Body>
                  {e.body}
                </Accordion.Body>
              </Accordion.Item>
            )
        })}

  </Accordion>
  )
}
