import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../api/repositories/UserRepository";
import { useCookies } from "react-cookie";
import { useState } from "react";


export default function LoginPage() {
  

  const [cookies, setCookie, removeCookie] = useCookies()
  const [error, setError] = useState();
  const navigate = useNavigate()

  const useHandleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    const response = await useLogin(user);
    const json = await response.json();
    if (response.status == 200) {
      setCookie("auth", json, { expiresIn: 60 * 60 * 24 * 1000 });
      navigate("/hotels");
    }
    setError(json);
   
  };

  return (
    <div className="LoginPage">
      <Container>
        <Row className="justify-content-center mx-auto">
          <Col lg={6} md={3}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Login</Card.Title>
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
                    <Button type="submit" className="btn w-100">Login</Button>
                  </div>
                </Form>
              </Card.Body>
              <Card.Footer className="d-inline-block ">
                <a href="/register" className="p-2">
                  Register
                </a>
                <a href="/forgot-password" className="p-2">
                  Forgot Password?
                </a>
                <div className="p-2">{error}</div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
