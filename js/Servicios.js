/*Para cada centro se informará el nombre de la sede, la dirección, los datos de
contacto y el horario de atención. Para los móviles de asistencia, se especificará el
lugar donde brindará servicio, el día y horario de atención.*/


let Centros = {
    data:[
        {   
            nombre:"Centro + Vida",
            categoria:"CentroDeApoyo",
            direccion: "Amazonas 398", //-31.412434, -64.528676
            horario:"de 8hs a 12hs y de 17hs a 22hs",
            telefono:"1138993411",
            image:"img/centro medico.jpg",
            

        },
        {
          nombre:"Centro Salud",
          categoria:"CentroDeApoyo",
          direccion: "Cerro Catedral 550", //-31.410478, -64.527937
          horario:"24 HS",
          telefono:"1138968595",
          image:"img/centro medico.jpg",
            
        },
        
       
    ]
};

let Moviles = {
  data:[
      {   
          nombre:"Unidad 01",
          categoria:"MovilDeApoyo",
          direccion: "Bellezas de Mano D' Glamour 265",//-31.410407, -64.531144
          horario:"de 8hs a 12hs y de 17hs a 22hs",
          dias:"lunes ,miercoles y viernes",
          image:"img/movil.png",
          

      },
      {
        nombre:"Unidad 02",
        categoria:"MovilDeApoyo",
        direccion: "Amazonas 605", //-31.409867, -64.529148
        horario:"24 HS",
        dias:"toda la semana",
        image:"img/movil.png",
          
      },
    ]
  }