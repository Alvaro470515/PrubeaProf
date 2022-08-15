
var input=  document.getElementById('numero');
var boton = document.getElementById("boton");
input.addEventListener('input',function(){
  if (this.value.length > 3) 
  alert("no puede ingresar mas de 3 digitos")
     this.value = this.value.slice(0,3); 
     
})
boton.addEventListener("click", invertir);

function invertir(){
  var inv = numero.value;
  numero.value = inv.split("").reverse().join("");
  document.getElementById("numeroinverso").value= inv
}





 