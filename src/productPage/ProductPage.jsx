import './productPageStyles.css'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getProductsFilter } from '../api/products.ts';

function ProductPage() {
    const { categoryName,page,limit } = useParams();
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const loadInfo = async () => {
        try{
            const data = await getProductsFilter(categoryName,pageNumber,limit);
            setProducts(data.data);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        loadInfo(); 
    }, [pageNumber]);

    return (
        <div className="product-page-container">
            <h1>{categoryName}</h1>

            <div className='product-list'>

                <div className='product-container'>
                {products.map((product) => (
                    <a href={``} key={product.id} className="product-card">
                        <img src={product.image_url} alt={product.name} className="product-image" />
                        <h4>{product.name}</h4>
                    </a>
                ))}
                </div>

            </div>


            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} className='pagination-button' 
                    onClick={()=>{setPageNumber(index + 1);window.scrollTo({ top: 0 });}}
                    style={{backgroundColor: pageNumber === index + 1? 'green' : 'white', 
                        color: pageNumber === index + 1? 'white' : 'black'}}>                
                        {index + 1}
                    </button>
                ))}
            </div>
            
        </div>
    );
}

export default ProductPage;