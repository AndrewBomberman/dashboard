import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../api/repositories/UserRepository";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useParams } from "react-router-dom"

export default function LoginPage() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const params = useParams()
  const [googleOAuthUrl , setGoogleOAuthUrl] = useState();

  

  useEffect(()=>{
    const loadOAuthUrl = async () =>{
      try {
        const response = await fetch("http://localhost:8000/api/v1/auth/google/url")
        const {url} = await response.json()
  
        setGoogleOAuthUrl(url)
      } catch (error) {
        console.log(error)
      }
    }
    loadOAuthUrl()

  },[])

  const useHandleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target["email"].value,
      password: e.target["password"].value,
    };
    await useLogin(user);
   
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
                    <Button type="submit" className="btn w-100">
                      Login
                    </Button>
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
                <div className="p-2">
                </div>
                <a href={googleOAuthUrl} className="btn btn-light w-100">Sign in with Google <FcGoogle/></a>
                
                
              </Card.Footer>
              
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
