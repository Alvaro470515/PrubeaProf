const app = new Vue({

    el: '#app',
    data: {
        notas : [],
        total : 0,
        promedio : 0,
        contador : 0,
        nota:""
    },
    methods: {
        

        agregar_nota(){
            this.notas.push({
                nota : this.nota
            })

            this.nota = "";
        },
    },

    computed: {


        promediar_nota(){
            this.total = 0;
            this.promedio = 0;
            this.contador=0;
            for(i of this.notas){
                this.contador++
                this.total = this.total + i.nota;
            }
            this.total = this.total/this.contador
            return this.total;
        },
        
    },

})