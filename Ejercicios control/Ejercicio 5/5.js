var cnum = [];
var i = 0;
var cnumeros = parseInt(prompt("¿Cuantos numeros va a digitar?"));

for (i = 0; i < cnumeros; i++) {
  cnum.push(Number(prompt("Ingresa tu nota:" + (i + 1))));
}
var nm = Math.max(...cnum);


document.write("El numero mayor es: " + nm +"<br>" + " Los numero digitados fueron: " + cnum)
