const productsGrid = document.getElementById("productsGrid");
const filterButtons = document.querySelectorAll(".filters button");

let allProducts = [];

//La verdad que las imagenes de esta API son feas
const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    allProducts = data;
    renderProducts(allProducts);
};

const renderProducts = (products) => {
    productsGrid.innerHTML = "";

    products.forEach(prod => {
        productsGrid.innerHTML += `
        <div class="product-card">
            <div class="product-image">
            <img src="${prod.image}" alt="${prod.title}">
            </div>

            <div class="product-info">
            <div class="product-category">${prod.category}</div>
            <div class="product-title">${prod.title}</div>
            <div class="product-price">$${prod.price}</div>

            <div class="product-actions">
                <button class="add-btn" onclick="addToCartById(${prod.id})">
                    Agregar
                </button>
            </div>
            </div>
        </div>
        `;
    });
};


filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        if (category === "all") {
            renderProducts(allProducts);
        } else {
        const filtered = allProducts.filter(
            prod => prod.category === category
        );
            renderProducts(filtered);
        }
    });
});

getProducts();

