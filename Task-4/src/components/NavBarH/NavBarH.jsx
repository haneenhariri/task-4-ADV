import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBarH.css';
import Btn from '../Btn/Btn';

export default function NavBarH({ data ,logoImg }) {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" className="navbar  d-flex align-item-center shadow-sm p-md-2 fw-medium">
        <Container className="d-flex justify-content-end align-items-center justify-content-md-center">
          <Navbar.Brand href="#home" className="logo me-auto">
            <img src={logoImg} alt="logo" className='m-0' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " className='border-0 p-0 p-md-3 fs-6' />
          <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-end ' >
            <Nav className="my-0 justify-content-center fw-semibold align-items-center text-center">
              {data.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <NavDropdown title={item.navCon} className='text-uppercase' id="collapsible-nav-dropdown" key={index}>
                      {item.items.map((dropdownItem, subIndex) => (
                        <NavDropdown.Item href={dropdownItem.navHref} key={subIndex}>
                          {dropdownItem.navCon}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }
                return (
                  <Nav.Link href={item.navHref} key={index} className='navLink px-4 py-3 text-uppercase '>
                    {item.navCon}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Btn btnText={'Make an Appointment'}/>
        </Container>
      </Navbar>
    </>
  );
}
