# LuxShop - E-commerce Landing Page 🛍️

El proyecto simula una tienda de moda y tecnología llamada **LuxShop**, con un diseño propio y minimalista.

## 🛠️ Tecnologías utilizadas
- **HTML5:** Estructura semántica.
- **CSS3:** Diseño responsive, Flexbox, Grid y variables CSS.
- **JavaScript (Vanilla):** Lógica del carrito, consumo de API y validaciones.
- **API Externa:** [FakeStoreAPI](https://fakestoreapi.com/) para la obtención de productos.

## 🚀 Funcionalidades Principales

### 1. Catálogo Dinámico
- Los productos no están escritos en el HTML, sino que se renderizan dinámicamente consumiendo datos desde la API.
- Uso de `fetch` y `async/await` para la carga de datos.

### 2. Filtros por Categoría
- Sistema de filtrado que permite ver productos por categorías (Tecnología, Joyería, Ropa de hombre/mujer) o ver todo el catálogo.
- Actualización del DOM en tiempo real al seleccionar un filtro.

### 3. Carrito de Compras Completo
- **Agregar productos:** Se pueden sumar items desde el catálogo.
- **Gestión de cantidades:** Botones para aumentar o disminuir unidades dentro del carrito.
- **Persistencia:** Uso de `localStorage` para que el usuario no pierda su carrito al recargar la página.
- **Cálculo automático:** El total y el contador del icono se actualizan al instante.

### 4. Formulario de Contacto Validado
- Validación nativa con JavaScript en el archivo `formValidations.js`.
- Comprobación de campos vacíos, longitud mínima de caracteres y formato de email con Expresiones Regulares (Regex).
- Feedback visual (mensajes de error en rojo y éxito en verde).

### 5. Diseño Responsive (Mobile First)
- Adaptable a dispositivos móviles, tablets y escritorio.
- **Menú Hamburguesa:** Navegación funcional en móviles desarrollada con lógica JS (toggle de clases).
