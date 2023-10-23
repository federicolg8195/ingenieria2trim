let publicaciones = {
    data:[
        {   
            Actividad:"Senderismo",
            image:"img/translasierra.jpg",
            descripcion: " En nuestro pintoresco destino turístico, el senderismo es una experiencia enriquecedora que te invita a explorar la belleza natural a pie. Descubre impresionantes paisajes mientras recorres rutas naturales y senderos escénicos. El senderismo te permite sumergirte en la naturaleza, experimentando la tranquilidad de cada paso. Únete a nosotros y embárcate en una emocionante aventura de senderismo para descubrir la maravilla de nuestro destino.",

        },
        {   
            Actividad:"Cabalgatas",
            image:"img/sierra chica700x500.jpg",
            descripcion: "La cabalgata es una experiencia inolvidable que te permite explorar la majestuosidad de la naturaleza a lomos de un noble corcel. Descubre paisajes impresionantes mientras sigues senderos naturales y rutas escénicas. La cabalgata es una actividad que te conecta con la esencia del entorno, ofreciéndote una experiencia única y relajante en la que puedes disfrutar de la belleza natural a tu propio ritmo. Únete a nosotros y descubre la magia de la cabalgata en nuestro destino.",
    
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
    name.innerText = i.Actividad.toUpperCase();
    container.appendChild(name);

     

     
    
     

      //descripcion
      let descripcion = document.createElement("h4");
      descripcion.innerText =i.descripcion;
      container.appendChild(descripcion);


   

      
   
    
    card.appendChild(container);
    
    document.getElementById("Actividades").appendChild(card);


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
document.getElementById("search").addEventListener
("click",() => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".organizacion-name");
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