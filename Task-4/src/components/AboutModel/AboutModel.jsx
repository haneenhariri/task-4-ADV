import './AboutModel.css'
import {  Modal } from 'react-bootstrap'

export default function AboutModel({ show, onHide }) {
  return (
    <Modal className='bg-transparent bg-opacity-75 w-100 border-0'
    show={show} 
    onHide={onHide} 
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header className='border-0 ' closeButton>
    </Modal.Header>
    <Modal.Body className='w-100 justify-content-center d-flex overflow-hidden'>
        <img className='w-50 ' src="/public/images/GalleryImg/gallery-1.jpg" alt="" />
    </Modal.Body>
  </Modal>
  )
}
