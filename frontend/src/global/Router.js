import { BrowserRouter,Routes,Route} from "react-router-dom";
import CategoryTemplate from "../templates/CategoryTemplate.js";
import CategoriesPage from "../pages/CategoriesPage.js";
import ProductsPage from "../pages/ProductsPage.js"


export default function Router (){
    return (
        <div className="Router">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CategoryTemplate/>}/>
                    <Route path="/home" element={<CategoryTemplate/>}/>
                    <Route path="/:id" element={<CategoryTemplate/>}/>
                    <Route path="/categories" element={<CategoriesPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}