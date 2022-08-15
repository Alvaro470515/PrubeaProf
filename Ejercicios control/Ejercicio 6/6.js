function multiplicar(){
	var num1 = parseFloat(document.getElementsByTagName('input')[0].value), 
	num2 = parseFloat(document.getElementsByTagName("input")[1].value);
	
	var multiplicacion = 0;
	const primer_numero = num1; 
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