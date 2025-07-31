export async function getCategories() {
    const response = await fetch('https://apitiendamax-production.up.railway.app/api/categories');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}

export async function getProductsFilter(category:String,page:Number, limit:Number) {
    const response = await fetch(`https://apitiendamax-production.up.railway.app/api/productFilter?category=${category}&page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}

