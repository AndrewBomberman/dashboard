import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../cards/CategoryCard';

export default function CategoryList(props){
    console.log(props)
    return(
        <Row>
            {props.list && props.list.map(category=>{
                return (
                <Col lg={4} md={2} key={category._id}>
                    <CategoryCard category={category} getter = {props.getter}/>
                </Col>
                )
            })}
        </Row>
    )
}