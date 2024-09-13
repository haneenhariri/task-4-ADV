import './Box.css'

export default function Box({img,title,text}) {
  return (
    <div className='py-4 shadow d-flex flex-column text-center align-items-center gap-2'>
      <div className='box-img p-3 rounded-circle d-flex align-content-center justify-content-center'>
        <img className='img' src={img} alt={title}/>
      </div>
      <h3 className='fs-5'>{title}</h3>
      <p className='fs-6'>{text}</p>
    </div>
  )
}
