import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Form";

export default function AddHotelForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="AddHotelForm">
      <Card>
        <Card.Body>
          <Card.Title>Add Hotel</Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    console.log(e.target.files);
                  }}
                />
              </Form.Group>
             
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
