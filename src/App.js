import Login from './pages/Login';
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
                      <Route path="/" element={<Login/>}/>


                  </Routes>
              </Container>
          </Router>
        </UserProvider>
  );
}

export default App;
