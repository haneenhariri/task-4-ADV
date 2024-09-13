import './TitleComp.css'

export default function TitleComp( {Ttitle , Tp ,Ts}) {
  return (
    <>
        <h2 className='Ttitle fw-bold'>{Ttitle}</h2>
        <span className={Ts}></span>
        <p className='Tp mb-0 fs-6'>{Tp}</p>
    </>
  )
}
