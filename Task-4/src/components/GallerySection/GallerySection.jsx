import { Container, Row } from 'react-bootstrap'
import './GallerySection.css'
import TitleComp from '../TitleComp/TitleComp'
import GallerySwiper from '../GallerySwiper/GallerySwiper'

export default function GallerySection() {
  return (
    <section className='py-5'>
      <Container>
        <Row className='d-flex flex-column align-items-center justify-content-center text-center'>
            <TitleComp
             Ttitle={'Gallery'}
             Ts={'span'}
             Tp={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}
            />
        </Row>
        <Row>
            <GallerySwiper/>
        </Row>
      </Container>
    </section>
  )
}
