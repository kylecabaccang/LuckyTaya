import { useEffect, React } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/landingPage.css";

/*IMPORTS FOR IMAGES*/
import Phone from '../images/phone.png';
import BilliardPlayers from '../images/billiardPlayersPhoto.png';
import PagcorIcon from '../images/pagcorIcon.png';
import LuckyBreakImage from '../images/luckyBreakYellowWhiteTransparent.png';



export default function Landing() {
  /*useEffect USED FOR BEING SCROLLED TO THE TOP OF THE PAGE WHEN TRAVERSED INTO THIS PAGE*/
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);      

    
  return (
    
    <div className="landingContainer">


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

          <Col xs={12}>
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

              <Link to="/login1" className="loginButtonRemoveUnderline">
                <div className="d-flex justify-content-center">
                  <button className="loginButton">LOGIN</button>
                </div>
              </Link>

              <div className="d-flex justify-content-center mt-4">
                  <button className="createAccountButton">CREATE ACCOUNT</button>
              </div>

              <p className="pt-4 pb-5 mb-5 d-flex justify-content-center agentInquireParagraph">
              How to be an agent?
                <Link className="ps-1 agentInquireLink">
                  Inquire
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="d-flex justify-content-center">
        <img src={BilliardPlayers} alt="Billiard Players" className="billiardsLanding"/>
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

          <Col xs={12} className="d-flex justify-content-center text-center pe-0">
              <p className="mb-0">All rights reserved by Lucky Taya Gaming Corporation</p>
          </Col>

          <Col xs={12} className="d-flex justify-content-center text-center pe-0">
              <p className="mb-0">Gaming for 21 years old and above only.</p>
          </Col>

          <Col xs={12} className="d-flex justify-content-center text-center pb-3 pe-0">
              <p className="mb-0">Keep it fun | Game responsibly</p>
          </Col>
        </Row>

      </Container>

      </footer>

    </div>

    
  );
}
