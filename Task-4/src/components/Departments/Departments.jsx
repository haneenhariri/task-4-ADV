import { Container, Row } from 'react-bootstrap'
import './Departments.css'
import TitleComp from '../TitleComp/TitleComp'
import TabsCom from '../TabsCom/TabsCom'


export default function Departments() {
  return (
    <section id='departments' className='py-5'>
        <Container>
            <Row className='my-3 d-flex flex-column justify-content-center align-items-center text-center'>
                <TitleComp
                    Ttitle={'Departments'}
                    Ts={'span'}
                    Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
                />
            </Row>
            <Row className='my-5'>
                <TabsCom/>
            </Row>
        </Container>
    </section>
  )
}
