import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link, useNavigate } from "react-router-dom"


export default function CategoryCard(props){
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/"+props.category._id)
        window.location.reload()
    }
   // console.log(props)
    return (
        <div className="CategoryCard">
            {props.category._id &&
            <Card>
                <Card.Body>
                    <Card.Title>{props.category.name}</Card.Title>
                    <Card.Text>
                        {props.category.description}
                    </Card.Text>
                    <Button onClick={handleClick}>Edit</Button>
                </Card.Body>
            </Card>}
        </div>
    )
}