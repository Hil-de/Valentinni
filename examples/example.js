// Simulación de datos del producto (en un escenario real, esto vendría de tu backend)
const product = {
    id: 1,
    name: "Collar de Diamantes",
    description: "Elegante collar de oro blanco de 18k con un diamante de 0.5 quilates.",
    price: 1299.99,
    image: "ruta-de-la-imagen.jpg"
};

// Función para cargar los detalles del producto
function loadProductDetails() {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productImage').src = product.image;
}

// Función para agregar al carrito
function addToCart() {
    // Aquí implementarías la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${product.name}`);
    alert("Producto agregado al carrito");
}

// Cargar detalles del producto cuando la página se carga
window.addEventListener('load', loadProductDetails);

// Agregar evento al botón de "Agregar al Carrito"
document.getElementById('addToCartBtn').addEventListener('click', addToCart);