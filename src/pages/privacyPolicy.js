import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/privacyPolicy.css";


export default function PrivacyPolicy() {   
    /*useEffect USED FOR BEING SCROLLED TO THE TOP OF THE PAGE WHEN TRAVERSED INTO THIS PAGE*/
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    <div className="privacyPolicyBackground ms-2 me-2">
        <div className="header mt-4">
        <h2>Privacy Policy</h2>
        </div>
        <div className="pt-3 ps-3 pe-3">
            <p className="pb-1"><strong> 1. Introduction </strong></p>
            <p className="pb-3 justified-text">1.1 This Privacy Policy explains how Lucky Taya Corporation ("the Company") collects, uses, and discloses personal information in connection with the use of the Lucky Taya app ("the App") in the Philippines ("PH").</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 2. Collection of Personal Information </strong></p>
            <p className="pb-3 justified-text">2.1 The Company collects personal information that you provide when you register and create an account on the App, including your name, email address, and date of birth.
            <br/>
            2.2 The Companny also collects information about your betting activities on the App, including the types of bets you place and the amount of money you wager.
            <br/>
            2.3 The Company may collect additional information from you in connection with the operation of the App, such as your device information and location data.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 3. Use of Personal Information </strong></p>
            <p className="pb-3 justified-text">3.1 The Company uses your personal informatoin to provide and improve the App, including processing your bets and transactions, and communicating with you about your account.
            <br/>
            3.2 The Company may also use your personal information for marketing and promotional purposes, such as sending you offers and promotions for the App and related products and services.
            <br/>
            3.3 The Company may use your personal information for research and analytics purposes, to understand how users are using the App and to improve its functionality and user experience.
            <br/>
            3.4 The Company may disclose your personal information to third-party service providers that assist with the operation of the App, such as payment processors and marketing providers.
            <br/>
            3.5 The Company may disclose your personal information if required by law or legal process, or if necessary to protect the rights, property, or safety of the Company or its users.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 4. Security of Personal Information </strong></p>
            <p className="pb-3 justified-text">4.1 The Company takes reasonable measures to protect your personal information from unauthorized access, disclosure, and use.
            <br/>
            4.2 The Company uses industry-standard security measures, such as encryption and access controls, to protect your personal information.
            <br/>
            4.3 However, no method of transmission over the Internet or electronic storage is 100% secure, and the Company cannot guaarntee the security of your personal information.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 5. Retention of Personal Information </strong></p>
            <p className="pb-3 justified-text">5.1 The Company retains your personal information for as long as necessary to provide the App and related services, and as required by law.
            <br/>
            5.2 The Company may retain certain information for longer periods of time for research and analytics purposes, but such information will be anonymize or aggregated.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 6. Your Rights </strong></p>
            <p className="pb-3 justified-text">6.1 You have the right to access and correct your personal information held by the Company.
            <br/>
            6.2 You have the right to withdraw your consent to the processing of your personal information at any time.
            <br/>
            6.3 You have the right to request that the Company delete your personal information, subject to certain legal exceptions.</p>
        </div>
        <div className="ps-3 pe-3">
           <p className="pb-1"><strong> 7. Contact Us </strong></p>
            <p className="pb-3 justified-text">7.1 If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your rights with respect to your personal information, please contact us at [contact email or address].</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 8. Changes to this Privacy Policy </strong></p>
            <p className="pb-3 justified-text">8.1 The Company may modify this Privacy Policy from time to time. The most current version of the Privacy Policy will be posted on the App.</p>
        </div>
        
        <div className="text-center mt-4 mb-3 pb-3">
          <Link to="/landing">
            <Button variant="warning" className="privacyPolicyButton">AGREE</Button>
          </Link>
        </div>
    </div>
    </>
  );
}

