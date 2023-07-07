import { useState, useEffect, React } from 'react';
import { Button, Form, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Style from "../CSS/login.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);



    const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
     };

  return (
    <>
    <div className="container">
        <Form style={{ width: "400px" }} className={`form ${showForm ? 'fade-in' : ''}`}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter your username" className="userAndPassword" />
          </Form.Group>


          <Form.Group controlId="formBasicPassword" className="mt-3">
            <InputGroup>
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="userAndPassword"/>
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
    </div>
    </>
  );
}
