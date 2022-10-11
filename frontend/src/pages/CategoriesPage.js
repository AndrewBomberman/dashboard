import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import CategoryList from '../templates/lists/CategoryList';

export default function CategoriesPage(){
  const [categories , setCategories] = useState([])

  useEffect(()=>{
    const get = async()=>{
      const response = await fetch("http://localhost:8000/api/v1/category")
      const json = await response.json()
      console.log(json)
      setCategories(json.subcategories)
    }
    get() 
  },[])

    return(
      <div className="Categories">
        <Container>
          <h1>
            <Badge bg="secondary">Categories</Badge>
          </h1>   
          <CategoryList list = {categories}/>
        </Container>
      </div>
    )
}