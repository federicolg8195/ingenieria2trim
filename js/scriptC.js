//carga de Comercios
for (let i of Comercios.data){
    let card = document.createElement("div");
    card.classList.add("card",i.categoria,"hide");
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
    name.innerText = i.nombre.toUpperCase();
    container.appendChild(name);
    
    //Direccion
    let direccion = document.createElement("h4");
    direccion.innerText= "DIRECCION: "+i.direccion
    container.appendChild(direccion);
    
     //Descripcion
     let Descripcion = document.createElement("h4");
     Descripcion.innerText= "Descripcion: "+i.Descripcion
     container.appendChild(Descripcion);

    //horario
    let horario = document.createElement("h4");
    horario.innerText = "Horarios: "+ i.horario;
    container.appendChild(horario)
    //telefono
    let telefono = document.createElement("h4");
    telefono.innerText="Telefono:"+i.telefono;
    container.appendChild(telefono);
    
    card.appendChild(container);
    
    document.getElementById("Comercios").appendChild(card);

}




function filterServicio(value){  
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



window.onload =() => {
    filterServicio("all");
}