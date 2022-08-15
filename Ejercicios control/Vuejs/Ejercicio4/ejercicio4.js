const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Ejercicio 4 vue',
        enunciado: "suma de numeros entre ellos",

        contador : 0,
        n1 : "",
        n2 : "",
        ns: "",
        resultado : ""
    },
    methods: {
        
    },

    computed: {

        calcular_operacion(){
            var b=this.n2,
            c=this.ns,
            a=this.n1;
            var suma=this.resultado;
            var contador=0;
            
            
            c= (b-a)-1;
            
            suma = 0;
            contador = a+1;
            for (var i=0;i<c;i++){
                suma += contador;
                contador = contador+1;   
                
            }
            
            return suma
        },


        
        
    },

})