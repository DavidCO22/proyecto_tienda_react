import './productStyle.css';
import { useEffect , useState } from 'react';
import {getCategories} from '../api/products.ts'

function ProductHome() {

    const [categoriesList, setCategories] = useState([]);

    useEffect(()=>{
        getCategories()
            .then((data)=> setCategories(data))
            .catch((error)=> console.error("Error fetching categories:", error));
    },[]);



    return(

        <div className="product-home-container">

            <h1>Categorias</h1>
            
            <div className='category-container'>
                {categoriesList.map((category) => (
                    <a href={`/products/${category.name}`} key={category.id} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <h2>{category.name}</h2>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default ProductHome;