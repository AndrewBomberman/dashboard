import CategoryForm from "./forms/CategoryForm"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ProductForm from "./forms/ProductForm";
import CategoryList from "./lists/CategoryList";
import ProductList from "./lists/ProductList"
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query"
import { getCategory } from "../api/CategoryApi";
import Spinner from 'react-bootstrap/Spinner';



export default function CategoryTemplate(){
    const params = useParams()
    const {data, status} = useQuery(['categories',params.id], ()=> get(params.id))

    while(status === "loading"){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }
    
    return (
        <div className="CatagoryTemplate">
            
            <Container>
                <Row>
                    <h1>
                        <Badge bg="dark"></Badge>
                    </h1>
                </Row>
                <Row>
                    <h3>
                        <Badge bg="dark"></Badge>
                    </h3>
                </Row>
                <Row>
                    <Col lg={6} md={4}>
                        <h2>
                            <Badge bg="dark">Add Category</Badge>
                        </h2>
                        <CategoryForm mode="POST" />
                    </Col>
                    <Col lg={6} md={4}>
                        <h2>
                            <Badge bg="dark">Add Product</Badge>
                        </h2>   
                    <ProductForm mode="POST"/>
                    </Col>
                </Row>
                <Row>
                    <h4>
                        <Badge bg="dark">SubCategories</Badge>
                        <CategoryList list={data.subcategories ?? []} />
                    </h4>
                </Row>
                <Row>
                    <h4>
                        <Badge bg="dark">Products</Badge>
                        <ProductList list={[]} />
                    </h4>
                </Row>
            </Container>
        </div>
    )
}