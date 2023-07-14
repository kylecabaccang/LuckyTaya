import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/tos.css";


export default function Tos() {   
 
  return (
    <>
    <div className="tosBackground ms-2 me-2">
        <div className="header mt-4">
        <h2>Terms and Conditions</h2>
        </div>
        <div className="pt-3 ps-3 pe-3">

            <p className="pb-1"><strong> 1. Introduction </strong></p>
            <p className="pb-3 justified-text">1.1 These terms and conditions govern your use of the Lucky Taya app ("the App"), owned and operated by Lucky Taya Corporation ("the Company"). Lucky Taya Corporation ("the Company") in the Philippines ("PH").</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 2. Eligibility </strong></p>
            <p className="justified-text">2.1 To use the App, you must be 21 years of age or older and located in the Philippines. By using the App, you confirm that you meet these requirements.
            <br />2.2 You must also comply with all applicable laws and regulations in PH.
            </p>
            
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 3. Registration </strong></p>
            <p className="justified-text">3.1 To use the App, you must register and create an account.
            <br/>
            3.2 You must providie accurate and complete information during the registration process.
            <br/>
            3.3 You must keep your account infomation secure and confidential.
            <br/>
            3.4 You must not share your account information with anyone else.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 4. Use of the App </strong></p>
            <p className="justified-text">4.1 You may only use the App for lawful purposes.
            <br/>
            4.2 You must not use the App to engage in any illegal, fraudulent, or abusive activity.
            <br/>
            4.3 You must not use the App to harass, intimidate, or threaten other users.
            <br/>
            4.4 The Company may suspend or terminate your use of the App if you violate these terms and conditions or engage in any other inappropriate conduct.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 5. Betting </strong></p>
            <p className="justified-text">5.1 The App allows you to place bets on billiards games.
            <br/>
            5.2 You may only place bets using funds that you have deposited into your account.
            <br/>
            5.3 The Company will hold your deposited funds in a separate account.
            <br/>
            5.4 The Company reserves the right to set betting limits and adjust odds at its discretion.
            <br/>
            5.5 The Company is not responsible for any losses or damages that you may incur as a result of your bets.
            <br/>
            5.6 You are solely responsible for understanding and complying with all applicable laws and regulations related to betting in PH.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 6. Withdrawals </strong></p>
            <p className="justified-text">6.1 You may withdraw funds from your account at any time, subject to any applicable fees and restrictions.
            <br/>
            6.2 The Company will process withdrawals as soon as possible, but may take up to 7 business days to complete the transaction.
            <br/>
            6.3 The Company may require you to provide additional information or documentation before processing your withdrawal.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 7. Disclaimer of Warranties </strong></p>
            <p className="justified-text">7.1 The App and all content, materials, and services provided through the App are provided "as is" and without warranties of any kind, express or implied.
            <br/>
            7.2 The Company does not guarantee the accuracy, reliability, completeness, or timeliness of any information or content provided through the App.
            <br/>
            7.3 The Company is not responsible for any errors or omissions in the App or any content provided through the App.
            <br/>
            7.4 The Company is not responsible for any losses or damages that you may incur as a result of using the App.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 8. Limitation of Liability </strong></p>
            <p className="justified-text">8.1 The Company is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.
            <br/>
            8.2 The Company's total liability for any claim arising out of or in connection with your use of the App is limited to the amount of funds you have deposited into your account.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 9. Intellectual Property </strong></p>
            <p className="justified-text">9.1 The App and all content, materials, and services provided through the App are owned by the Company or its licensors and are protected by intellectual property laws.
            <br/>
            9.2 You may not use any content, materials, or services provided through the App for any commercial purpose without the Company's prior written consent.</p>
        </div>
        <div className="ps-3 pe-3">
            <p className="pb-1"><strong> 10. Modification and Termination </strong></p>
            <p className="justified-text">10.1 The Company may modify these terms and conditions at any time by posting the modified terms on the App.
            <br/>
            10.2 The Company may terminate your use of the App at any time for any reason.</p>
        </div>

        <div className="text-center mt-4 mb-3 pb-3">
          <Link to="/privacy-policy">
            <Button variant="warning" className="tosButton">AGREE</Button>
          </Link>
        </div>
    </div>
    </>
  );
}
