import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "../cards/ProductCard"


export default function ProductList(props){
   return (
    <div className='ProductList'>
      <Row>
            {props.list && props.list.map(product=>{
                return (
                <Col lg={3} md={4} key={product._id}>
                    <ProductCard product={product}/>
                </Col>
                )
            })}
        </Row>
        
    </div>
   )
}