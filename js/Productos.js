/*Los comerciantes podrán publicar avisos, indicando el nombre y un detalle del
producto ofrecido, algunas fotos, y su categoría dentro de las categorías disponibles. Si
es un aviso sobre un servicio, se deben ingresar las restricciones del mismo. En el caso
de un artículo para venta, se deben registrar sus características.

Al crearse el aviso, se
registra la fecha, y queda disponible para las consultas. Los comerciantes podrán

Dado que se espera la visita de viajeros de diferentes lugares, se espera poder
mostrar junto con el precio, la cotización diaria de moneda extranjera.*/

let Productos = {
    data:[
        {   
            id:"1",
            nombre:"Queso",
            categoria:"Comestible",
            tipo:"Articulo",
            detalle: "El queso, con su exquisita diversidad de sabores y texturas, es la estrella de la gastronomía que cautiva paladares en todo el mundo. Además de su delicioso sabor, es una fuente rica de calcio y proteínas, ofreciendo una experiencia culinaria inigualable.", 
            image:"img/Queso.jpg",
            restricciones:"",
            caracteristicas:"se destaca por sus características distintivas, que incluyen su sabor robusto y salado, así como una textura firme y quebradiza. Este queso es envejecido durante un período prolongado, lo que le confiere su sabor intenso y notas terrosas, convirtiéndolo en una deliciosa adición a platos de pasta, ensaladas y aperitivos.",
            fechaDeCreacion:"10/09/2023",
            precio:"1500",
            

        },
    
        {   
            id:"2",
            nombre:"Ibuprofeno",
            categoria:"Farmacia",
            tipo:"Articulo",
            detalle: "El ibuprofeno es un medicamento antiinflamatorio no esteroideo (AINE) ampliamente utilizado que alivia el dolor, reduce la inflamación y disminuye la fiebre. Es una opción común para aliviar dolores leves a moderados, como dolores de cabeza, dolores musculares y fiebre, proporcionando un rápido alivio.", 
            image:"img/ibuprofeno.jpg",
            restricciones:"",
            caracteristicas:"Las cápsulas blandas de ibuprofeno ofrecen una forma fácil de ingerir el medicamento, con rápida absorción y dosificación precisa, lo que las hace ideales para aliviar el dolor de manera efectiva y conveniente en cualquier momento. ",
            fechaDeCreacion:"11/09/2023",
            precio:"600",
            

        },
        {   
            id:"3",
            nombre:"Sastreria",
            categoria:"Ropa",
            tipo:"Servicio",
            detalle: "servicio altamente personalizado que se dedica a la confección y ajuste de prendas de vestir a medida", 
            image:"img/sastreria.jpg",
            restricciones:"plazo de entrega mínimo de dos semanas para prendas personalizadas",
            caracteristicas:"",
            fechaDeCreacion:"09/09/2023",
            precio:"",
            

        },
        
       
    ]
};


