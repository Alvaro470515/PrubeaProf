function multiplicar(){
	var num1 = parseFloat(document.getElementsByTagName('input')[0].value), num2 = parseFloat(document.getElementsByTagName("input")[1].value);
	if (num1 > 100 || num2 > 100){
		alert("No puede ingresar números con más de 3 dígitos");
        return;
    }
	var multiplicacion = 0;
	const primer_numero = num1; //No es necesaria, sólo para el alert
	if (num1 > 0)
	while(num1){
		multiplicacion += num2;
		num1--;
	}
	else
	while(num1){
		multiplicacion -= num2;
		num1++;
	} 
	alert(primer_numero+" * "+num2+" = "+multiplicacion);
}