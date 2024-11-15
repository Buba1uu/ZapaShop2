// Agregar objetos a un JSON
var usuarios = [
    {
        "nombre" : "Gamaliel",
        "apellido" : "Quiroz"
    },
    {
        "nombre" : "Facundo",
        "apellido" : "Romero"
    }
]; //La cadena recien creada

var usuarioNuevo = {
    "nombre" : "Peter",
    "apellido" : "Pool"
};//un elemento
var cadenaUsuariosNuevos = [
    {
        "nombre" : "Ryan",
        "apellido" : "Reinolds"
    },
    {
        "nombre" : "Hugh",
        "apellido" : "Jackman"
    }
];//cadena de elementos

usuarios.push(usuarioNuevo); //agrego un elemento
usuarios.push({
    "nombre" : "Dead",
    "apellido" : "Pool"
}); //agrego un elemento


cadenaUsuariosNuevos.forEach(function(elemento) {
    usuarios.push(elemento);
});//por cada elemento dentro de cadenaNuevosUsuarios, hago un push a la cadena usuarios. Guardando uno a uno, con un foreach

for (let indice in usuarios) {
    console.log(indice + ": " + usuarios[indice].nombre + " " +usuarios[indice].apellido);
}//Mostrar el array de usuarios