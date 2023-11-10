import { Productos } from './Productos.js';


function createProductCards() {
    for (let i of Productos.data) {
      let card = document.createElement("div");
      card.classList.add("card", i.categoria, "hide", i.tipo);
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
  
      let container = document.createElement("div");
      container.classList.add("container");
      // Nombre
      let name = document.createElement("h2");
      name.classList.add("producto-name");
      name.innerText = i.nombre.toUpperCase();
      container.appendChild(name);
  
      // Detalle
      let detalle = document.createElement("h4");
      detalle.innerText = "Detalle: " + i.detalle;
      container.appendChild(detalle);
  
      if (i.tipo == "Servicio") {
        // Restricciones
        let restricciones = document.createElement("h4");
        restricciones.innerText = "Restriccioness: " + i.restricciones;
        container.appendChild(restricciones);
      }
  
      if (i.tipo == "Articulo") {
        // Caracteristicas
        let caracteristicas = document.createElement("h4");
        caracteristicas.innerText = "Caracteristicas:" + i.caracteristicas;
        container.appendChild(caracteristicas);
      }
  
      if (i.precio !== "") {
        // Precio
        let precio = document.createElement("h4");
        precio.innerText = "Precio: " + i.precio + " $";
        container.appendChild(precio);
  
        // Cotizacion
        let cotizacion = document.createElement("h4");
        cotizacion.innerText = "Cotizacion: " + parseFloat(i.precio) + " USD";
        container.appendChild(cotizacion);
      }
  
      card.appendChild(container);
  
      document.getElementById("Productos").appendChild(card);
    }
  }
  
  // Llama a la función para crear las tarjetas de productos
  createProductCards();
  