let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartBtn = document.querySelector(".navicon");
const cartModal = document.getElementById("cartModal");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

cartBtn.addEventListener("click", () => {
    cartModal.classList.add("open");
    cartOverlay.classList.add("show");
    renderCart();
});

cartOverlay.addEventListener("click", closeCart);

function closeCart() {
    cartModal.classList.remove("open");
    cartOverlay.classList.remove("show");
}

function addToCartById(id) {
    const product = allProducts.find(p => p.id === id);
    if (!product) return;
    addToCart(product);
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
        });
    }

    saveCart();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

function changeQuantity(id, amount) {
    const item = cart.find(prod => prod.id === id);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
    }

    saveCart();
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart">Tu carrito está vacío</p>`;
        cartTotal.textContent = "$0";
        cartCount.textContent = "0";
        return;
    }

    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        cartItemsContainer.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-info">
            <h4>${item.title}</h4>
            <p>$${item.price}</p>
            <div class="cart-qty">
                <button onclick="changeQuantity(${item.id}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            </div>
            <div class="remove-btn-container" >
                <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
            <div/>
        </div>
        `;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartCount.textContent = count;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
