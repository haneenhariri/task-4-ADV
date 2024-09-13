import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Gallery.css';
import AboutModel from '../AboutModel/AboutModel'; 
import { FaPlay } from 'react-icons/fa';

export default function Gallery() {
  const [modalShow, setModalShow] = useState(false); 

  return (
    <div className='modelH'>
      <img className='w-100' src="/public/images/GalleryImg/about.jpg" alt="gallery" />
      <div className='mbtn'>
        <AboutModel show={modalShow} onHide={() => setModalShow(false)} /> 
        <Button className='btnC border-0 rounded-5 d-flex justify-content-center align-items-center' onClick={() => setModalShow(true)}>
            <FaPlay />
        </Button>
      </div>
    </div>
  );
}
