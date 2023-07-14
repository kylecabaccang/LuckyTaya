import { useState, useEffect, React } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
/*
// THIS IS FOR IMPORTING SWEET ALERT MODAL FROM REACT-BOOTSTRAP ONCE INSTALLED (npm i)
import Swal from "sweetalert2"
*/
import "../CSS/login.css";

/*IMPORT IMAGES*/
import BackButton from '../images/backButton.png';

export default function Login2() {
    /*INITIAL STATES FOR THE CORRESPONDING COMPONETS, false if not initially shown, true if initially shown*/
    const [showPassword] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showLuckyBreak, setShowLuckyBreak] = useState(false);
    const [showBilliards, setShowBilliards] = useState(false);
    
    /*STATES THAT HAPPENS WHEN THE MODAL IS CLOSED*/
    const handleModalClose = () => {
      setShowModal(false);
      setShowLuckyBreak(true);
      setShowBilliards(true);

      setTimeout(() => {
            setShowBilliards(false);
          }, 3000);
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

    // THIS IS FOR BACK-END FETCHING OF DATA FROM THE DATABASE BUSINESS LOGIC BEFORE ALLOWING/REJECTING AN ACCOUNT TO PROCEED TO THE DASHBOARD
/*
        // Prevents page redirection via form submission
        e.preventDefault();

        // Process a fetch request to the corresponding API
        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                email : email,
                password: password,
            })
        })
        .then(res => res.json())

        .then(data => {
            console.log(data);

            // If no user info is found, the "access" property will not be available
            if(data.access !== undefined){
                localStorage.setItem("token", data.access);
                retrieveUserDetails(data.access);
                Swal.fire({
                  icon: 'success',
                  title: 'Login Successful',
                  text: 'Welcome to Game Junkie PlayStation Games Digital Store!',
                })
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Your email or password is incorrect. Please review your input and try again.',
            })
              
        }
    })


        // Clear input fields after submission
        setEmail('');
        setPassword('');

    */
  return (
    <>
    <div className="cont">

    <Link to = "/login1">
      <img src={BackButton} alt="Back Button" className="backButton"/>
    </Link>


        {/*LUCKY BREAK PICTURE*/}
        {showLuckyBreak && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -180 }}
            transition={{ duration: 0.7}}
            style={{ position: "absolute" }}
          >
            <img
              className="luckyBreak"
              src="https://i.imgur.com/627iiL7.png"
              alt="Lucky Break"
            />
            
          </motion.div>
        )}

        {/*LOGIN FORM*/}
        {showForm && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
          <Form style={{ width: "300px" }} className="form wholeForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter your username" className="userAndPassword" required/>
            </Form.Group>


            <Form.Group controlId="formBasicPassword" className="mt-3" >
              <InputGroup>
                  <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="userAndPassword" required/>
              </InputGroup>
            </Form.Group>

            <Form.Group class="mt-2 mb-4">
            <Form.Text className="text-muted">
                  <Link to="/forgot-password" class="forgotPass">Forgot Password?</Link>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="button">
              LOGIN
            </Button>

            <Form.Group controlId="formBasicCheckbox" class="mt-3 d-flex justify-content-center">
               <Form.Check type="checkbox" label="Remember Me" className="rememberMe" />
             </Form.Group>
          </Form>
          </motion.div>
        )}
        
        {/*BILLIARD PLAYERS PICTURE*/}
        
        <div className="billiards">
          <motion.img
            className="billiards__"
            src="https://i.imgur.com/6hCMhO8.png"
            alt="Billiards Image"
            initial={{ opacity: 0 }}
            animate={showBilliards ? { opacity: 1 } : {opacity: 0}}
            transition={{ duration: 3 }}
          />
        </div>

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
    </div>
    </>
  );
}
