const getAllProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const filterProductsByCategory = (category, products) => {
    const filteredProducts = products.filter(
        prod => prod.category === category
    );
    console.log(filteredProducts);
    return filteredProducts;
};

const init = async () => {
    const prods = await getAllProducts();
    filterProductsByCategory("jewelery", prods);
};

init();
