
(function (){

// Variables

    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

// Funciones

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una nueva tarea válida")
            tareaInput.className = "error";
            return false;
        }

// Agregamos contenido al enlace
        enlace.appendChild(contenido);

// Le establecemos un atributo href
        enlace.setAttribute("href", "#");

// Agregamos el enlace "a" a la lista de li
        nuevaTarea.appendChild(enlace);

// Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);


        tareaInput.value = "";                  // Luego de ejecutar todo borrará el texto de la casilla y lo deja vacio de nuevo

// Remover el elemento NUEVO agregado
        for (var i = 0; i <= lista.children.length -1; i++){
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);                      
            });
        }
    };

// Al clickear la casilla de tarea, vuelva a poner el texto y quite el aviso rojo ERROR
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega una nueva tarea" )
    };

// Quitar las tareas clickeadas

    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

// Eventos

// Agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

// Comprobar input / clickear en casilla de tarea        Se borre el cuadro rojo de error cuando clickee la casilla 
tareaInput.addEventListener("click", comprobarInput);

// Crear ciclo y borrar elementos de la lista | Solo servirá para elementos que se cargan default al inicio de l pag, no los nuevos.(Más arribas está para los nuevos)
for (var i = 0; i <= lista.children.length -1; i++){           // lista || children = accede a los "hijos" de la lista || length = cuentelos
    lista.children[i].addEventListener("click", eliminarTarea);     //acceda a hijos en lista, asignamos i, agregue un evento, que cuando dé click elimine 
};                                                            





}());