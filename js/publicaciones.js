let publicaciones = {
    data:[
        {   
            nombreSitio:"Translasierra",
            image:"img/translasierra.jpg",
            descripcion: " Traslasierra es una región situada al oeste de la provincia de Córdoba. Es conocida por su belleza natural, con imponentes montañas, ríos cristalinos y valles verdes. Uno de los destinos más populares en Traslasierra es Villa de las Rosas, que ofrece oportunidades para practicar senderismo, cabalgatas y disfrutar de la tranquilidad de la naturaleza.",

        },
        {   
            nombreSitio:"Sierras Chicas",
            image:"img/sierra chica700x500.jpg",
            descripcion: "Las Sierras Chicas son una cadena montañosa que se encuentra en la zona este de Córdoba, cerca de la ciudad capital, Córdoba. Esta región es famosa por sus hermosos paisajes montañosos, sus pintorescos pueblos y la posibilidad de realizar actividades al aire libre, como senderismo y ciclismo. Villa Allende es un lugar destacado en Sierras Chicas, conocido por su encanto y actividades recreativas.",
    
        },
        {   
            nombreSitio:"Punilla",
            image:"img/punilla.jpg",
            descripcion: "Punilla es una región situada al norte de Córdoba y es una de las áreas turísticas más populares de la provincia. La ciudad de Villa Carlos Paz es un destino muy visitado en esta región, conocida por su hermoso lago y su animada vida nocturna. Punilla también ofrece una variedad de opciones para disfrutar de la naturaleza, como el Parque Nacional Quebrada del Condorito, que es el hogar de cóndores andinos y un espectacular cañón.",
            
        },
        
    
    
    
    
    
    
    
    
    
    
    ]
        
};

for (let i of publicaciones.data){
    

    let card = document.createElement("div");
    card.classList.add("card",i.tipo);
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
    name.classList.add("organizacion-name");
    name.innerText = i.nombreSitio.toUpperCase();
    container.appendChild(name);

     

     
    
     

      //descripcion
      let descripcion = document.createElement("h4");
      descripcion.innerText =i.descripcion;
      container.appendChild(descripcion);


    // Boton de Actividades del lugar
  let actividadesButton = document.createElement("button");
  actividadesButton.innerText = "Actividades del lugar";
  if (i.nombreSitio === "Translasierra") {
  actividadesButton.addEventListener("click", () => {
    // Agrega aquí el código para redirigir a la página de actividades del lugar
    // Por ejemplo, puedes usar window.location.href para cambiar la URL.
    // Ejemplo: window.location.href = "URL de la página de actividades";
    window.location.href = "./Actividades.html";



  });
  
  }


  container.appendChild(actividadesButton);

      
   
    
    card.appendChild(container);
    
    document.getElementById("Sitios").appendChild(card);


}





// function filterOrganizacion(value){
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//         if(value.toUpperCase() == button.innerText.toUpperCase()){
//         button.classList.add("active");
//         }
//         else{
//             button.classList.remove("active");
//             }
//     });
//     let elements=document.querySelectorAll(".card");
//     elements.forEach(element =>{
//         if(value == "all"){
//         element.classList.remove("hide");
//         }
//         else{
//              if(element.classList.contains(value)){
//                 element.classList.remove("hide")
//              }
//              else{
//                 element.classList.add("hide");
//              }
            
//         }
//     });

// }

// var map = L.map("map").setView([-34.5067, -58.7064], 14);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 140,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var dameVidaIcon = L.icon({
//   iconUrl: 'img/organizacion1.png',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var peludosIcon = L.icon({
//   iconUrl: 'img/organizacion2.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var protectoresIcon = L.icon({
//   iconUrl: 'img/organizacion3.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var ayudaIcon = L.icon({
//   iconUrl: 'img/organizacion4.png',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var eukanubaIcon = L.icon({
//   iconUrl: 'img/organizacion5.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var sentirIcon = L.icon({
//   iconUrl: 'img/organizacion6.jpg',
 

//   iconSize:     [38, 95], // size of the icon
//   shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// var marker= L.marker([-34.498118878125,-58.731104790625],{icon: dameVidaIcon}).addTo(map).bindPopup("Cura Brochero 857, Malvinas Argentinas");
// var marker2= L.marker([-34.5095215624204,-58.6910869593848],{icon: peludosIcon}).addTo(map).bindPopup("Universidad de Buenos Aires 2493, Malvinas Argentinas.")
// var marker3= L.marker([-34.5337706717172,-58.7211212030303],{icon: protectoresIcon}).addTo(map).bindPopup("Las Malvinas 1042, San Miguel.")
// var marker4= L.marker([-34.5361616357143,-58.7038525704082],{icon: ayudaIcon}).addTo(map).bindPopup("Vicente López 1507, San Miguel.")
// var marker5= L.marker([-34.5365415428571,-58.7103550857143],{icon: eukanubaIcon}).addTo(map).bindPopup("Urquiza 1772, San Miguel.")
// var marker6= L.marker([-34.4982464,-58.639014],{icon: sentirIcon}).addTo(map).bindPopup("María 1501, Tigre.")



// window.onload =() => {
//     filterOrganizacion("all");
// }