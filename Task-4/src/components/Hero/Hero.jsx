import { Carousel } from 'react-bootstrap'

import './Hero.css'
import Btn from '../Btn/Btn'

export default function Hero({CarousalData}) {
  return (
    <section className='hero'  id='home'>
        <Carousel  className='w-100 ' pause="hover">
            {CarousalData.map((item,index)=>{
                return(
                    <Carousel.Item key={index} interval={item.interval} className='w-100 '>
                    <img className='w-100 ' src={item.img} alt="Medicio" />
                    <Carousel.Caption className='heroCap  p-2 p-md-4 my-5 text-dark'>
                        <h3 className='mb-3 fs-1 '>{item.h3}</h3>
                        <p>{item.p}</p>
                        <Btn btnText={'Read More'}/>
                       </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </section>
  )
}
