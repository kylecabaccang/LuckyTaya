import { Row, Col, Container, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import "../CSS/TrifectaEventSelector.css";



/*IMPORTS FOR IMAGES*/
import PagcorIcon from '../images/pagcorIcon.png';
import chevronUpAndDown from '../images/chevronUpAndDown.png';


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  const [isRotated, setIsRotated] = useState(false);

  const handleToggleRotate = () => {
    decoratedOnClick();
    setIsRotated((prevIsRotated) => !prevIsRotated);
  };

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
    >
    <img
        src={chevronUpAndDown}
        style={{
                  transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
        />
       {children} 
    </button>
  );
}


export default function TrifectaEventSelector() {
  const [todayDate, setTodayDate] = useState(new Date());
    const [tomorrowDate, setTomorrowDate] = useState(new Date());

    useEffect(() => {
      // Function to update the dates
      const updateDates = () => {
        const now = new Date();
        setTodayDate(now);

        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1); // Increment the day by 1
        tomorrow.setHours(0, 0, 0, 0); // Set the time to midnight
        setTomorrowDate(tomorrow);
      };

      // Calculate the time until the next midnight (in milliseconds)
      const timeUntilNextMidnight = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        return midnight - now;
      };

      // Call updateDates initially to set the dates
      updateDates();

      // Schedule the updateDates function to be called every day at midnight
      const intervalId = setInterval(updateDates, timeUntilNextMidnight());

      // Clear the interval when the component is unmounted
      return () => {
        clearInterval(intervalId);
      };
    }, []);

    // Format the dates in the desired format (MM/DD/YYYY) with Singapore timezone
    const formattedTodayDate = todayDate.toLocaleString('en-US', {
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    const formattedTomorrowDate = tomorrowDate.toLocaleString('en-US', {
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });



    
  return (
    
    <div className="trifectaArenaSelectorContainer">

      {/*HEADER*/}
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center pt-5 mt-5 trifectaEventSelectorHeader">SELECT EVENT TO BET ON
        </div>
      </div>

      <hr className="mt-0 mb-0 mt-3 mb-3 horizontalRuler"/>
     
      {/*UPCOMING EVENTS*/}
      <div Container>
        <Row>
          <Col xs={7}>
            <div className="trifectaEventSelectorUpcoming">UPCOMING EVENTS</div>
          </Col>

          <Col xs={5}>
            <div className="trifectaEventSelectorUpcoming">{formattedTomorrowDate}</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
                 <Card>
                   <Card.Header className="trifectaEventsCardContainer1">
                    <Row>
                      <Col xs={10}>
                          <div className="d-flex justify-content-center trifectaEventsCardTitle">10 MAN RING</div>
                          <div className="d-flex justify-content-center trifectaEventsCardSubtitle">1PM EVENT | Tomas Morato, QC</div>
                        
                         
                       </Col>
                       <Col xs={2}>
                        <CustomToggle eventKey="0"></CustomToggle>
                       </Col>
                     </Row>
                   </Card.Header>
                   <div className="d-flex justify-content-center pt-2 pb-2 trifectaEventsCardContainer2">OPEN FOR BETTING</div>
                   <Accordion.Collapse eventKey="0">
                     <Card.Body>
                      <div>
                        <p className="d-flex justify-content-center trifectaEventsPlayers">SHARKS PLAYERS</p>
                        <Row>
                          <Col xs={6}>
                            <ol>
                               <li>Daquioag, Alvin</li>
                               <li>Ortega, Paul John</li>
                               <li>Caridad, Roberto</li>
                               <li>Clarin, Bong</li>
                               <li>Panganiban, Allan</li>
                            </ol>
                          </Col>

                          <Col xs={6}>
                            <ol start={6}>
                               <li>Quinlog, Mark</li>
                               <li>Labastida, Resty</li>
                               <li>Arevalo, Joshua</li>
                               <li>Martin, Justin</li>
                               <li>Salinel, Rayniel</li>
                            </ol>
                          </Col>
                        </Row>
                      </div>
                     </Card.Body>
                     
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
          </Col>
        </Row>

        <hr className="mt-0 mb-0 mt-5 mb-3 horizontalRuler"/>

        {/*TODAY'S EVENTS*/}
        <Row className="pt-2">
          <Col xs={7}>
            <div className="trifectaEventSelectorUpcoming">TODAY'S EVENTS</div>
          </Col>

          <Col xs={5}>
            <div className="trifectaEventSelectorUpcoming">{formattedTodayDate}</div>
          </Col>
        </Row>
      </div>

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
