import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../../api/repositories/UserRepository";
import { useCookies } from "react-cookie";
import { useState } from "react";

export default function RegisterPage() {
  const [cookies, setCookie, removeCookie] = useCookies("auth");
  const [error, setError] = useState();
  const navigate = useNavigate();
  

  const useHandleSubmit = async (e) => {
    e.preventDefault();
    /*
    
    console.log(cookies)
    setCookie("auth",token, {httpOnly: true})
    */
    const user = {
      email: e.target["email"].value,
      password: e.target["password"].value
    }
    const {url} = await useRegister(user)
    window.location.href = url
    
   
  };

  return (
    <div className="RegisterPage">
      <Container>
        <Row className="justify-content-center mx-auto">
          <Col lg={8} md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Register</Card.Title>
                <Form onSubmit={useHandleSubmit}>
                  <Form.Group className="p-2">
                    <Form.Control
                      type="email"
                      required
                      name="email"
                      placeholder="E-mail"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="p-2">
                    <Form.Control
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>
                  <div className="p-2">
                    <Button type="submit" className="btn w-100">
                      Register
                    </Button>
                  </div>
                  
                </Form>
              </Card.Body>
              <Card.Footer>
                <a href="/login" className="p-2">
                  Login
                </a>
                <a href="/forgot-password" className="p-2">
                  Forgot Password?
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
