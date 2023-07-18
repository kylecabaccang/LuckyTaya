import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "../CSS/TrifectaArenaSelector.css";


/*IMPORTS FOR IMAGES*/
import PagcorIcon from '../images/pagcorIcon.png';

export default function TrifectaArenaSelector() {
    
  return (
    
    <div className="trifectaArenaSelectorContainer">

      {/*HEADER*/}
      <div className="d-flex justify-content-center pt-5 mt-5 trifectaArenaSelectorHeader">SELECT EVENT</div>


      {/*ARENA SELECTIONS*/}
      <Link className="linkRemoveUnderline">
        <div className="trifectaArenaBoxContainer pt-2 mt-5 pb-2 me-0">
          <Row>
            <Col xs={2}>
              
            </Col>

            <Col xs={8} className="ps-0 pe-0">
              <div className="d-flex justify-content-center trifectaArenaBoxTitle">TIGER ARENA</div>
              <div className="d-flex justify-content-center trifectaArenaBoxSubtitle">Sgt. Esguera, Quezon City</div>
            </Col>
          </Row>
        </div>
      </Link>

      <Link className="linkRemoveUnderline">
        <div className="trifectaArenaBoxContainer pt-2 mt-4 pb-2 me-0">
          <Row>
            <Col xs={2}>
              
            </Col>

            <Col xs={8} className="ps-0 pe-0">
              <div className="d-flex justify-content-center trifectaArenaBoxTitle">GREAT WHITE ARENA</div>
              <div className="d-flex justify-content-center trifectaArenaBoxSubtitle">Tomas Morato, Quezon City</div>
            </Col>
          </Row>
        </div>
      </Link>

      <Link className="linkRemoveUnderline">
        <div className="trifectaArenaBoxContainer pt-2 mt-4 pb-2 me-0">
          <Row>
            <Col xs={2}>
              
            </Col>

            <Col xs={8} className="ps-0 pe-0">
              <div className="d-flex justify-content-center trifectaArenaBoxTitle">HAMMERHEAD ARENA</div>
              <div className="d-flex justify-content-center trifectaArenaBoxSubtitle">Tondo, Manila</div>
            </Col>
          </Row>
        </div>
      </Link>

      <Link className="linkRemoveUnderline">
        <div className="trifectaArenaBoxContainer pt-2 mt-4 pb-2 me-0">
          <Row>
            <Col xs={2}>
              
            </Col>

            <Col xs={8} className="ps-0 pe-0">
              <div className="d-flex justify-content-center trifectaArenaBoxTitle">BULL SHARK ARENA</div>
              <div className="d-flex justify-content-center trifectaArenaBoxSubtitle">Mactan, Cebu</div>
            </Col>
          </Row>
        </div>
      </Link>

      {/*EXTRA CONTAINER*/}
      <div className="trifectaArenaSelectorExtraContainer">
      </div>

      {/*FOOTER BRANDING*/}
      <footer className="pt-5 trifectaArenaSelectorPagcorFooterFont">

        <Container fluid>
          <Row className="me-0">

            
            <Col xs={12} className="pe-0 pb-3 ps-0">
              <div className="d-flex justify-content-center text-center">
                <img src={PagcorIcon} alt="Pagcor Picture" className="trifectaArenaSelectorPagcorIcon"/>
              </div>
            </Col>
            

            <Col xs={12} className="d-flex justify-content-center text-center pe-0 ps-0">
                <p className="mb-0">Licensed by PAGCOR</p>
            </Col>

            <Col xs={12} className="d-flex justify-content-center text-center pe-0 ps-0">
                <p className="mb-0">All rights reserved by Lucky Taya Gaming Corporation</p>
            </Col>

            <Col xs={12} className="d-flex justify-content-center text-center pe-0 ps-0">
                <p className="mb-0">Gaming for 21 years old and above only.</p>
            </Col>

            <Col xs={12} className="d-flex justify-content-center text-center pe-0 ps-0 pb-5">
                <p className="mb-0">Keep it fun | Game responsibly</p>
            </Col>
          </Row>

        </Container>

      </footer>

    </div>

    
  );
}
