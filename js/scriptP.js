var apiUrl = "https://api.bluelytics.com.ar/v2/latest";

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
    }
  })
  .then(data => {
    var oficialValueAvg = data.oficial.value_avg;
    var blueValueAvg = data.blue.value_avg;
    
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
  
for (let i of Productos.data){
    let card = document.createElement("div");
    card.classList.add("card",i.categoria,"hide",i.tipo);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    
    let container = document.createElement("div");
    container.classList.add("container");
    //nombre
    let name = document.createElement("h2");
    name.classList.add("producto-name");
    name.innerText = i.nombre.toUpperCase();
    container.appendChild(name);
    
    //Detalle
    let detalle = document.createElement("h4");
    detalle.innerText= "Detalle: "+i.detalle
    container.appendChild(detalle);
    
    if(i.tipo =="Servicio"){
    //Restricciones
    let restricciones = document.createElement("h4");
    restricciones.innerText = "Restriccioness: "+ i.restricciones;
    container.appendChild(restricciones);}

    if(i.tipo =="Articulo"){
    //Caracteristicas
    let caracteristicas = document.createElement("h4");
    caracteristicas.innerText="Caracteristicas:"+i.caracteristicas;
    container.appendChild(caracteristicas);
    }
    
    
    if(i.precio !==""){
    //Precio
    let precio = document.createElement("h4");
    precio.innerText="Precio: "+i.precio + " $";
    container.appendChild(precio);
    // console.log(precio);
    // console.log(typeof(precio));
    // console.log(oficialValueAvg);
    // console.log(typeof(oficialValueAvg));
    // console.log(blueValueAvg);
    // cotizacion 
    let cotizacion = document.createElement("h4");
    cotizacion.innerText="Cotizacion: "+ parseFloat(i.precio)+ " USD";
    container.appendChild(cotizacion);
}

    
    card.appendChild(container);
    
    document.getElementById("Productos").appendChild(card);

}



function filterProducto(value){  
    let elements=document.querySelectorAll(".card");
    elements.forEach(element =>{
        if(value == "all"){
        element.classList.remove("hide");
        }
        else{
             if(element.classList.contains(value)){
                element.classList.remove("hide")
             }
             else{
                element.classList.add("hide");
             }
            
        }
    });

}



document.getElementById("search").addEventListener
("click",() => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".producto-name");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element,index)=> {
        if (element.innerText.includes(searchInput.toUpperCase()))
        {
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})


window.onload =() => {
    filterProducto("all");
}