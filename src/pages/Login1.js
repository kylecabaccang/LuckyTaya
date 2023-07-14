import { React } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../CSS/login.css";

/*IMPORTS FOR IMAGES*/
import FacebookIcon from '../images/facebookIcon.png';
import GoogleIcon from '../images/googleIcon.png';
import BackButton from '../images/backButton.png';

export default function Login1() {
 
    
  return (
    <>

    <div className="cont">
    {/*BACK BUTTON*/}

    <Link to = "/landing">
      <img src={BackButton} alt="Back Button" className="backButton"/>
    </Link>

       

        {/*LUCKY BREAK PICTURE*/}
        
          <motion.div
            initial={{ opacity: 1, y:-400 }}
            animate={{ opacity: 1, y: -180 }}
            transition={{ duration: 0.3}}
            style={{ position: "absolute" }}
          >
            <img
              className="luckyBreak"
              src="https://i.imgur.com/627iiL7.png"
              alt="Lucky Break"
            />
            
          </motion.div>

            <Container>
              <Row className="me-0 mt-5">
                <Col xs={12} className="pe-0">
                  <div className="d-flex justify-content-center">
                    <Link to="/login2">
        	            <Button variant="primary" type="submit" className="button">
        	              LOGIN
        	            </Button>
                    </Link>
                  </div>
                </Col>

                <Col xs={12} className="pe-0 mt-3">
                  <div className="d-flex justify-content-center">
                    <p className="loginOptionDivider">OR</p>
                  </div>
                </Col>

                <Col xs={12} className="pe-0 mt-3">
                  <div className="d-flex justify-content-center">
                    <Link to="/login2">
        	            <Button variant="primary" type="submit" className="FacebookLoginButton">
        	            <Row>
	        	            <Col xs={1}>
	        	            	<img src={FacebookIcon} alt="Facebook Icon" className="align-left" />
	        	            </Col>
	        	            <Col xs={11}>
        	              		Login with Facebook
        	              	</Col>
        	            </Row>
        	            </Button>
                    </Link>
                  </div>
                </Col>

	            <Col xs={12} className="pe-0 mt-3">
	              <div className="d-flex justify-content-center">
	                <Link to="/login2">
	    	            <Button variant="primary" type="submit" className="GoogleLoginButton">
	    	            <Row>
	        	            <Col xs={1}>
	    	            		<img src={GoogleIcon} alt="Facebook Icon" className="align-left" />
	    	            	</Col>
	    	            	<Col xs={11}>
	    	              		Login with Google
	    	              	</Col>
	    	            </Row>
	    	            </Button>
	                </Link>
	              </div>
	            </Col>


              </Row>
            </Container>


        {/*BILLIARD PLAYERS PICTURE*/}
        
        <div className="billiards">
          <motion.img
            className="billiards__"
            src="https://i.imgur.com/6hCMhO8.png"
            alt="Billiards Image"
            initial={{ opacity: 1, y: -260 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        
    </div>
    </>
  );
}
