import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, QueryCache } from 'react-query';


export default function CategoryForm(props){
    const params = useParams()
   
    const cleanInput = ()=>{
        document.getElementById("name").value = ""
        document.getElementById("description").value = ""
    }
    const handleSubmit = async(e)=>{
        
        e.preventDefault()
        const queryCache = new QueryCache({
            onError: error => {
              console.log(error)
            },
            onSuccess: data => {
              console.log(data)
            }
        })
        const cache = queryCache.find('categories')
        console.log(cache)
        const category = {
            name:document.getElementById("name").value,
            description:document.getElementById("description").value,
            parent_id:params.id ?? null
        }
        const response = await fetch("http://localhost:8000/api/v1/category",{
            method:props.mode,
            mode:"cors",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(category),
        })
        const json = await response.json()
        cleanInput()
    }
    

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control
                            type="text"
                            placeholder="Name"
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