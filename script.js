const { createApp } = Vue

  createApp({
    data() {
      return {
       
        // istanzio un array vuto
        todos : [], 

        // istanzio una variabile che collego con il v-model al campo di input
        newEl : ''

      }
    },

    methods: {
        getJson(){
            // faccio una chiamata ad axios per ottenere l'oggetto json
            axios.get('./server.php').then(res=>{
                
                // metto l'oggetto jason nell'array todos
                this.todos = res.data;

            })
        },

        pushNewEl(){

            let data = {
                newEl : ''
            }

            data.newEl = this.newEl ;

            axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
               
                
                this.getJson();

            });

            this.newEl = ''
        },

        // funzione che barra l'elemento
        strike(todo , indice){
            let data = {
                newEl : todo.text,
                elIndex : indice ,
                boolean : todo.isClick

            }

            console.log(data)
            axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

                this.getJson();
            
            });
        },

        cancella(indice){
            let data = {
                index : indice
            }

            axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

                this.getJson();
            
            });
        }
    },

    mounted() {
        this.getJson();
    },
  }).mount('#app')