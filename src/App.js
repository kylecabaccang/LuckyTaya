import Tos from './pages/Tos';
import PrivacyPolicy from './pages/privacyPolicy.js';
import Landing from './pages/LandingPage';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import Dashboard from './pages/Dashboard';
import TrifectaArenaSelector from './pages/TrifectaArenaSelector';
import TrifectaEventSelector from './pages/TrifectaEventSelector';




import { UserProvider } from "./UserContext";
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "react-bootstrap";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <UserProvider>
          <Router>
              <Container>
                  <Routes>
                      <Route path="/tos" element={<Tos/>}/>
                      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                      <Route path="/landing" element={<Landing/>}/>
                      <Route path="/login1" element={<Login1/>}/>
                      <Route path="/login2" element={<Login2/>}/>
                      <Route path="/dashboard" element={<Dashboard/>}/>
                      <Route path="/trifecta-arena-selector" element={<TrifectaArenaSelector/>}/>
                      <Route path="/trifecta-event-selector" element={<TrifectaEventSelector/>}/>



                  </Routes>
              </Container>
          </Router>
        </UserProvider>
  );
}

export default App;
