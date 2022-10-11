import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom"
export default function ProductCard(props){
    console.log(props.category)
    return (
        <div className="CategoryCard">
            {props.product._id &&
            <Card>
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                    <Card.Text>
                        {props.product.price}
                    </Card.Text>
                    <Card.Text>
                        {props.product.quantity}
                    </Card.Text>
                    <Link to={"/"+props.product._id}>Edit</Link>
                </Card.Body>
            </Card>}
        </div>
    )
}