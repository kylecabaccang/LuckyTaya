import { useState, React } from 'react';
import "../CSS/dashboard.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/*IMPORTED ICONS FOR THE NAVBAR*/
import EventsIcon from '../images/flagIcon.png';
import ProfileIcon from '../images/profileIcon.png';
import LogoutIcon from '../images/logoutIcon.png';
import NotificationIcon from '../images/notificationIcon.png';
import LoadUpIcon from '../images/loadUpIcon.png';
import CashoutIcon from '../images/cashoutIcon.png';
import NavBarBackButton from '../images/navBarBackButton.png';
import LuckyBreakYellowWhiteTransparent from '../images/luckyBreakYellowWhiteTransparent.png';
import WalletIcon from '../images/walletIcon.png';


export default function Dashboard() {
   
   const [show, setShow] = useState(false);
   const [showOffcanvas, setShowOffcanvas] = useState(false);


   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const handleCloseOffcanvas = () => {
       setShowOffcanvas(false);
     };

    
  return (
    <>
    <div className="background-image">
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 pt-4 ms-3 me-3">
                  <Container fluid>
                    <Navbar.Brand href="#" className="text-light"><img src={LuckyBreakYellowWhiteTransparent} alt="Lucky Break Logo" className="main-logo" />
                    </Navbar.Brand>
                    <div className="walletContainer d-flex ms-2 ps-2 pe-2 pt-1 pb-1">
                      <img src={WalletIcon} alt="Wallet Icon" className="pe-2 walletIcon" />
                      P 3,051,730.25
                    </div>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navbar-dark" onClick={() => setShowOffcanvas((prevState) => !prevState)} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                      className="navBarRadius"
                      show={showOffcanvas}
                    >
                      <Offcanvas.Header closeButton={false} className="pe-4 justify-content-end">
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className=" pt-5">
                          <a href="#" onClick={handleCloseOffcanvas}>
                            <img src={NavBarBackButton} alt="Close Button" className="close-button-image" />
                          </a>
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 sideNavBar">
                          <Nav.Link href="#action1" className="ps-4 link-color">
                            <img src={EventsIcon} alt="Events Icon" className="icon-image pe-3" />EVENTS
                          </Nav.Link>
                          <NavDropdown.Divider />

                          <Nav.Link href="#action2" className="ps-4 link-color">
                            <img src={ProfileIcon} alt="Events Icon" className="icon-image pe-3" />MY PROFILE
                          </Nav.Link>
                          <NavDropdown.Divider />

                          <Nav.Link href="#action3" className="ps-4 link-color">
                            <img src={LogoutIcon} alt="Events Icon" className="icon-image pe-3" />LOG OUT
                          </Nav.Link>
                          <NavDropdown.Divider />


                          <NavDropdown
                            title={<span className="dropdown-title">
                                <img src={NotificationIcon} alt="Notification Icon" className="icon-image pe-3" />MY BETS
                            </span>}
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            className="dropdown-no-border"
                          >
                            <NavDropdown.Item href="#action4" className="sideNavBarDropdown">
                            <img src={NotificationIcon} alt="Notification Icon" className="icon-image pe-3" />PER GAME
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action5" className="sideNavBarDropdown">
                              <img src={NotificationIcon} alt="Notification Icon" className="icon-image pe-3" />TRIFECTA
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action6" className="sideNavBarDropdown">
                              <img src={NotificationIcon} alt="Notification Icon" className="icon-image pe-3" />EVENT BETTING
                            </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown.Divider />

                          <Nav.Link href="#action7" className="ps-4 link-color">
                            <img src={LoadUpIcon} alt="Notification Icon" className="icon-image pe-3" />LOAD UP
                          </Nav.Link>
                          <NavDropdown.Divider />

                          <Nav.Link href="#action8" className="ps-4 link-color">
                            <img src={CashoutIcon} alt="Notification Icon" className="icon-image pe-3" />CASH OUT
                          </Nav.Link>
                          <NavDropdown.Divider />
                        </Nav>

                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
          ))}
    </div>
    </>
  );
}
