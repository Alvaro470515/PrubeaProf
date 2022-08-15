
var suma=0;
var cnotas= [];
var i=0;
var estudiante=prompt("Ingrese el nombre del estudiante")
var notas=parseInt(prompt("¿Cuantas notas va a promediar?"))



for(i=0; i<notas; i++){
    cnotas.push(Number(prompt("Ingresa tu nota:" + (i + 1), "1,0-5,0"))); 
}

var suma = cnotas.reduce(function(total, cantidad) {
    return total + cantidad
});

var promedio = (suma / (cnotas.length)).toFixed(1);

var estado;
if (promedio >= 3.0) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}

document.write("El estudiante a ser evaluado es: "   +  estudiante + "<br>"+ 
"La cantidad de notas a evular son: " + notas + "<br>"+ 
"Las notas obtenidas por el estudiante son: " + cnotas + "<br>" 
+ "Tu Promedio es: " + promedio + "<br>"
 + "El estudiante obtuvo la siguiente valoracion : " + estado + "<br>");

