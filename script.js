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