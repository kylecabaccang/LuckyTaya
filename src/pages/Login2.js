import { useEffect, useState, React } from 'react';
import { Row, Col, Container, Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../CSS/login2.css";

/*IMPORTS FOR IMAGES*/
import BackButton from '../images/backButton.png';
import Phone from '../images/phone.png';
import BilliardPlayers from '../images/billiardPlayersPhoto.png';
import PagcorIcon from '../images/pagcorIcon.png';
import LuckyBreakImage from '../images/luckyBreakYellowWhiteTransparent.png';



export default function Landing() {
  /*INITIAL STATES FOR THE CORRESPONDING COMPONETS, false if not initially shown, true if initially shown*/
     const [showPassword] = useState(false);
     const [showModal, setShowModal] = useState(true);
     const [showForm, setShowForm] = useState(false);


  /*useEffect USED FOR BEING SCROLLED TO THE TOP OF THE PAGE WHEN TRAVERSED INTO THIS PAGE*/
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);      

  /*STATES THAT HAPPENS WHEN THE MODAL IS CLOSED*/
  const handleModalClose = () => {
    setShowModal(false);
   };

  /*STATE HOOKS FOR MODAL THAT MAKES IT SHOW UP WHEN PAGE IS VISITED*/
  useEffect(() => {
    if (!showModal) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 1000);
      return() => clearTimeout(timer);
    }
  }, [showModal]);

    
  return (
    
    <div className="landingContainer">

      <Link to = "/login1">
        <img src={BackButton} alt="Back Button" className="backButton"/>
      </Link>

      {/*MODAL*/}
      <Modal show={showModal} onHide={handleModalClose} className="modalBorder" centered backdrop="static" keyboard={false}>
         <Modal.Body className="modalBox">
           <h4 className="modalText">Gaming for 21 years old and above only.</h4>
           <h4 className="modalText pt-2">Keep it fun and game responsibly.</h4>
         </Modal.Body>
         <Modal.Footer className="modalBox">
           <Button variant="primary" onClick={handleModalClose} className="yearsOldButton">
             Yes, I am 21 years old or above.
           </Button>
         </Modal.Footer>
      </Modal>


        <div Container>
          <Row className="me-0">

            {/*LUCKY BREAK PICTURE*/}
            <Col xs={12} className="d-xs-block d-sm-block d-md-none">
              <div className="d-flex justify-content-center pt-5 luckyBreakMobile">
                  <img
                    className="luckyBreakPhoto"
                    src={LuckyBreakImage}
                    alt="Lucky Break"
                  />
              </div>
            </Col>

            <Col xs={12} className="d-xs-block d-sm-block d-md-none">
              <div className="quote ps-4 pe-4">
                <p>ANG KAUNA-UNAHANG BILLIARD ON-SITE BETTING AT ONLINE APP SA MUNDO!</p>
              </div>
            </Col>

            <Col xs={12} className="d-none d-md-block">
              <img src={Phone} alt="Phone Picture" className="phone"/>
            </Col>

            <Col xs={12} className="landingButtonsCol">
              <div className="landingButtonsContainer justify-content-start">

                <img
                  className="luckyBreakPhotoDesktopView"
                  src={LuckyBreakImage}
                  alt="Lucky Break"
                />

                {/*LOGIN FORM*/}
                       {showForm && (

                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 1 }}
                           >

                           <div className="d-flex justify-content-center">
                             <Form className="login2Form">
                               <Form.Group controlId="formBasicEmail">
                                 <Form.Control type="text" placeholder="Enter your username" className="userAndPassword" required/>
                               </Form.Group>


                               <Form.Group controlId="formBasicPassword" className="mt-3" >
                                 <InputGroup>
                                     <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="userAndPassword" required/>
                                 </InputGroup>
                               </Form.Group>

                               <Form.Group class="mt-2 mb-4">
                               <Form.Text className="text-muted" >
                                     <Link to="" class="forgotPass">Forgot Password?</Link>
                                 </Form.Text>
                               </Form.Group>

                               <div className="d-flex justify-content-center">
                                 <Button variant="primary" type="submit" className="login2Button">
                                   LOGIN
                                 </Button>
                               </div>


                               <Form.Group controlId="formBasicCheckbox" class="mt-3 d-flex justify-content-center">
                                  <Form.Check type="checkbox" label="Remember Me" className="rememberMe" />
                                </Form.Group>
                              </Form>
                           </div>
                         </motion.div>
                       )}

               

                <div className="login2Container">
                </div>

                <div className="pb-5 mb-5 d-flex justify-content-center agentInquireParagraph">
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-center">
          <motion.img
            className="billiardsLanding"
            src={BilliardPlayers}
            alt="Billiards Image"
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 1, y: 100}}
            transition={{ duration: 0.3 }}
          />
        </div>

       
        {/*FOOTER BRANDING*/}
        <footer className="pt-5 pagcorFooterFont">

        <Container fluid>
          <Row className="me-0">
            <Col xs={12} className="pe-0">
              <div className="d-flex justify-content-center text-center">
                <img src={PagcorIcon} alt="Pagcor Picture" className="pagcorIcon"/>
              </div>
            </Col>

            <Col xs={12} className="d-flex justify-content-center text-center pe-0">
                <p className="mb-0">Licensed by PAGCOR</p>
            </Col>

            <Col xs={12} className="d-flex justify-content-center text-center pe-0 pb-5">
                <p className="mb-0">All rights reserved by Lucky Taya Gaming Corporation</p>
            </Col>
          </Row>

        </Container>

        </footer>

    </div>

    
  );
}
