import './productStyle.css';

function ProductHome() {

    const categories = [
        { id: 1, name: 'Mercado', image:'/alimentos.png' },
        { id: 2, name: 'Televisores', image: '/televisores.png' },
        { id: 3, name: 'electrodomesticos', image: '/electrodomesticos.png' },
        { id: 3, name: 'Computadores', image: '/compus.png' }

    ]

    return(

        <div className="product-home-container">

            <h1>Categorias</h1>
            
            <div className='category-container'>
                {categories.map((category) => (
                    <a href='#' key={category.id} className="category-card">
                        <img src={category.image} alt={category.name} width={200} height={120} className="category-image" />
                        <h2>{category.name}</h2>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default ProductHome;