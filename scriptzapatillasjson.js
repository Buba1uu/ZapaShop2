const loader = document.getElementById("loader");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
const searchLink = document.getElementById("searchLink");

const mainTitle = document.getElementById("mainTitle");
const mainContent = document.getElementById("mainContent");
const searchSection = document.getElementById("searchSection");

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

window.onload = function () {
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1000);
};

homeLink.addEventListener('click', () => {
  mostrarContenido('Inicio', 'Bienvenido a la Página Interactiva');
});

aboutLink.addEventListener('click', () => {
  mostrarContenido('Sobre Nosotros', 'Somos una empresa dedicada a ofrecer servicios web.');
});

contactLink.addEventListener('click', () => {
  mostrarContenido('Contacto', 'Puedes contactarnos a través del formulario.');
});

searchLink.addEventListener('click', () => {
  searchSection.classList.toggle('hidden');
});

function mostrarContenido(titulo, contenido) {
  mainTitle.innerText = titulo;
  mainContent.innerText = contenido;
  searchSection.classList.add('hidden');
}

document.getElementById('product1').addEventListener('click', () => {
    window.location.href = "producto1.html";
  });
  
  document.getElementById('product2').addEventListener('click', () => {
    window.location.href = "producto2.html";
  });
  
  document.getElementById('product3').addEventListener('click', () => {
    window.location.href = "producto3.html";
  });
  
  document.getElementById('product4').addEventListener('click', () => {
    window.location.href = "producto4.html";
  });
  
  document.getElementById('product5').addEventListener('click', () => {
    window.location.href = "producto5.html";
  });
  
  document.getElementById('product6').addEventListener('click', () => {
    window.location.href = "producto6.html";
  });

  document.getElementById('product3').addEventListener('click', () => {
    window.location.href = "producto7.html";
  });
  
  document.getElementById('product4').addEventListener('click', () => {
    window.location.href = "producto8.html";
  });
  
  document.getElementById('product5').addEventListener('click', () => {
    window.location.href = "producto9.html";
  });
  

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Introduce un término de búsqueda.");
    return;
  }

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const resultados = data.items.filter(item => item.includes(query));
      searchResults.innerHTML = resultados.length
        ? resultados.map(item => `<p>${item}</p>`).join('')
        : '<p>No se encontraron resultados.</p>';
    })
    .catch(error => {
      searchResults.innerHTML = '<p>Ocurrió un error en la búsqueda.</p>';
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("productos.json")
      .then(response => response.json())
      .then(data => mostrarProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
});

let carrito = [];

function mostrarProductos(productos) {
  const contenedor = document.getElementById('productos');
  productos.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img class="img-card" src="${producto.imagen}" alt="${producto.nombre}" 
               style="width: ${producto.ancho}; height: ${producto.alto};" />
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>Stock: ${producto.stock}</p>
          <p class="price">$${producto.precio}</p>
          <button class="agregar-carrito" data-id="${producto.nombre}" data-precio="${producto.precio}" data-nombre="${producto.nombre}">Agregar al Carrito</button>
      `;
      contenedor.appendChild(card);
  });

  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  botonesAgregar.forEach(boton => {
      boton.addEventListener('click', agregarAlCarrito);
  });
}

function agregarAlCarrito(event) {
  const producto = {
      nombre: event.target.dataset.nombre,
      precio: parseFloat(event.target.dataset.precio),
      cantidad: 1
  };

  const productoExistente = carrito.find(p => p.nombre === producto.nombre);
  if (productoExistente) {
      productoExistente.cantidad++;
  } else {
      carrito.push(producto);
  }

  actualizarCarrito();
  mostrarModalCarrito();
}

function actualizarCarrito() {
  const productosCarrito = document.getElementById('productosCarrito');
  const totalElement = document.getElementById('total');

  productosCarrito.innerHTML = '';

  carrito.forEach(producto => {
      const itemCarrito = document.createElement('div');
      itemCarrito.classList.add('carrito-item');
      itemCarrito.innerHTML = `
          <div class="producto-detalle">
              <p class="producto-nombre">${producto.nombre} - $${producto.precio}</p>
              <div class="cantidad-control">
                  <button class="restar-cantidad" data-nombre="${producto.nombre}">-</button>
                  <span class="cantidad">${producto.cantidad}</span>
                  <button class="sumar-cantidad" data-nombre="${producto.nombre}">+</button>
              </div>
          </div>
      `;
      productosCarrito.appendChild(itemCarrito);
  });

  const total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function mostrarModalCarrito() {
  const modal = document.getElementById('carritoModal');
  modal.style.display = 'block';

  const botonesSumar = document.querySelectorAll('.sumar-cantidad');
  botonesSumar.forEach(boton => {
      boton.addEventListener('click', sumarCantidad);
  });

  const botonesRestar = document.querySelectorAll('.restar-cantidad');
  botonesRestar.forEach(boton => {
      boton.addEventListener('click', restarCantidad);
  });
}

function sumarCantidad(event) {
  const nombreProducto = event.target.dataset.nombre;
  const producto = carrito.find(p => p.nombre === nombreProducto);
  if (producto) {
      producto.cantidad++;
      actualizarCarrito();
  }
}

function restarCantidad(event) {
  const nombreProducto = event.target.dataset.nombre;
  const producto = carrito.find(p => p.nombre === nombreProducto);
  if (producto) {
      producto.cantidad--;
      if (producto.cantidad === 0) {
          carrito = carrito.filter(p => p.nombre !== nombreProducto); // Eliminar producto si la cantidad es cero
      }
      actualizarCarrito();
  }
}

document.getElementById('seleccionarMas').addEventListener('click', () => {
  const modal = document.getElementById('carritoModal');
  modal.style.display = 'none';
});

document.getElementById('procederPago').addEventListener('click', () => {
  mostrarModalPago();
});

function mostrarModalPago() {
  const modal = document.getElementById('pagoModal');
  modal.style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', () => {
  const modal = document.getElementById('carritoModal');
  modal.style.display = 'none';
});

document.getElementById('closePagoModal').addEventListener('click', () => {
  const modal = document.getElementById('pagoModal');
  modal.style.display = 'none';
});

document.getElementById('formPago').addEventListener('submit', (event) => {
  event.preventDefault();

  const nombreTarjeta = document.getElementById('nombreTarjeta').value;
  const numeroTarjeta = document.getElementById('numeroTarjeta').value;
  const fechaExpiracion = document.getElementById('fechaExpiracion').value;
  const cvv = document.getElementById('cvv').value;

  console.log('Datos de pago:', { nombreTarjeta, numeroTarjeta, fechaExpiracion, cvv });

  alert('Pago realizado con éxito');
  carrito = [];
  actualizarCarrito();
  document.getElementById('pagoModal').style.display = 'none';
});