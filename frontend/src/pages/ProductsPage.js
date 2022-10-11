import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import ProductList from '../templates/lists/ProductList';

export default function ProductsPage(){
  const [products , setProducts] = useState([])

  useEffect(()=>{
    const get = async()=>{
      const response = await fetch("http://locathost:8000/api/v1/product")
      const json = await response.json()
      setProducts(json)
    }
    get() 
  },[])

    return(
      <div className="Products">
        <Container>
          <h1>
            <Badge bg="secondary">Products</Badge>
          </h1>   
          <ProductList list = {products}/>
        </Container>
      </div>
    )
}