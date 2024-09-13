import { navData } from '../../data/navData'
import InfoNav from '../InfoNav/InfoNav'
import NavBarH from '../NavBarH/NavBarH'
import './Header.css'

export default function Header() {
  return (
    <header className='sticky-top'>
        <InfoNav
            time={'Monday - Saturday, 8AM to 10PM'}
            call={'Call us now +1 5589 55488 55'}
        />
        <NavBarH
            logoImg = {"./images/navImg/logo.png"}
            data={navData}
        />
    </header>
  )
}
