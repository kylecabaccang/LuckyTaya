import { useEffect, React } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../CSS/login1.css";

/*IMPORTS FOR IMAGES*/
import BackButton from '../images/backButton.png';
import Phone from '../images/phone.png';
import BilliardPlayers from '../images/billiardPlayersPhoto.png';
import PagcorIcon from '../images/pagcorIcon.png';
import FacebookIcon from '../images/facebookIcon.png';
import GoogleIcon from '../images/googleIcon.png';
import LuckyBreakImage from '../images/luckyBreakYellowWhiteTransparent.png';



export default function Landing() {
  /*useEffect USED FOR BEING SCROLLED TO THE TOP OF THE PAGE WHEN TRAVERSED INTO THIS PAGE*/
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);      

    
  return (
    
    <div className="landingContainer">

    <Link to = "/landing">
      <img src={BackButton} alt="Back Button" className="backButton"/>
    </Link>


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
              <div className="quoteDesktopView ps-4 pe-4">
                <p>ANG KAUNA-UNAHANG BILLIARD ON-SITE BETTING AT ONLINE APP SA MUNDO!</p>
              </div>

              <Link to="/login2" className="linkRemoveUnderline">
                <div className="d-flex justify-content-center">
                  <button className="loginButton">LOGIN</button>
                </div>
              </Link>

              <Col xs={12} className="pe-0 mt-3">
                <div className="d-flex justify-content-center">
                  <p className="loginOptionDivider">OR</p>
                </div>
              </Col>

              <Link to="" className="linkRemoveUnderline">
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="facebookLoginButton">
                    <Row>
                      <Col xs={1}>
                        <img src={FacebookIcon} alt="Facebook Icon" className="align-left" />
                      </Col>
                      <Col xs={10}>
                          Login with Facebook
                      </Col>
                    </Row>
                  </Button>
                </div>
              </Link>

              <Link to="" className="linkRemoveUnderline">
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" type="submit" className="googleLoginButton">
                    <Row>
                      <Col xs={1}>
                        <img src={GoogleIcon} alt="Facebook Icon" className="align-left" />
                      </Col>
                      <Col xs={10}>
                          Login with Google
                      </Col>
                    </Row>
                  </Button>
                </div>
              </Link>

              <p className="pt-4 pb-5 mb-5 d-flex justify-content-center agentInquireParagraph">
              How to be an agent?
                <Link className="ps-1 agentInquireLink">
                  Inquire
                </Link>
              </p>

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
      <footer className="pt-5 login1PagcorFooterFont">
        <Container fluid>
          <Row className="me-0">
            <Col xs={12} className="pe-0">
              <div className="d-flex justify-content-center text-center">
                <img src={PagcorIcon} alt="Pagcor Picture" className="login1PagcorIcon"/>
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
