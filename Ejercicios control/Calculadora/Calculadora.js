const botonnumeros=document.getElementsByName("datonumero");
const botonoperacion=document.getElementsByName("datoopera");
const botonigual= document.getElementsByName("dataigual")[0];
const botonborrar= document.getElementsByName("databorrar")[0];
var result= document.getElementById("result");
var opeact="";
var opeant="";
var operacion= undefined;

botonnumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        gregarnumero(boton.innerText);
    
    })
})

botonoperacion.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectoperacion(boton.innerText);
    })
})

botonigual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();

})

botonborrar.addEventListener("click", function(){
    clear();
    actualizarDisplay();

})

function  gregarnumero(num){
    opeact = opeact.toString() + num.toString();
    actualizarDisplay();
    
}

function clear(){
    opeact= "";
    opeant= "";
    operacion= undefined;    
}

function selectoperacion(op){
    opeact = opeact.toString() + op.toString();
    actualizarDisplay();
     if (opeact=="") return;
     if (opeant !==""){
         calcular();

     }
        
     operacion= op.toString();
     opeant= opeact;
     opeact= "";

}

function calcular(){
    var calculo;
    const anterior= parseFloat(opeant);
    const actual= parseFloat(opeact);   
    if(isNaN(anterior)|| isNaN(actual)) return;
    switch(operacion){
        case"+":
        calculo=anterior + actual;
        break;
        case"-":
        calculo=anterior - actual;
        break;
        case"*":
        calculo=anterior * actual;
        break;
        case"/":
        calculo=anterior / actual;
        break;
        default:
        return;
    } 
    opeact= calculo;
    operacion= undefined;
    opeant= "";  
}

function actualizarDisplay(){
    result.value= opeact;
}

  clear();


