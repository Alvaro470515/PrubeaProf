var b=0
var c=0
var a=0
var suma;
var contador=0;

a = parseInt(prompt('Ingrese el primer numero:',''));

b = parseInt(prompt('Ingrese el segundo numero:',''));

c= (b-a)-1;

suma = 0;
contador = a+1;
for (i=0;i<c;i++){
    suma += contador;
    contador = contador+1;   
    
}
document.write("El primer numero digitado es :"+ a +"<br>" +"El segundo numero digitado es: "+ b +"<br>"+
   "los numeros a sumar son : "+ i + "<br>"+ "El resultado es : "+ suma)