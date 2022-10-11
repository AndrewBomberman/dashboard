import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export default function ProductForm(){
    const params = useParams()

    const cleanInput = ()=>{
        document.getElementById("name").value = ""
        document.getElementById("description").value = ""
        document.getElementById("price").value = ""
        document.getElementById("quantity").value = ""
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
       
        const product = {
            name:document.getElementById("name").value,
            description:document.getElementById("description").value,
            price:document.getElementById("price").value,
            quantity:document.getElementById("quantity").value,
            category_id:params.id ?? null
        }
        const response = await fetch("http://localhost:8000/api/v1/product",{
            method:"POST",
            mode:"cors",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(product),
        })
        const json = await response.json()
        console.log(json)
        cleanInput()
        window.location.reload()
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            autoFocus
                            required={true}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="Number"
                            step="0.01"
                            placeholder="Price"
                            autoFocus
                            required={true}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Quantity"
                                autoFocus
                                required={true}
                                />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="description"
                        >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )

}

