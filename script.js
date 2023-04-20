const { createApp } = Vue

  createApp({
    data() {
      return {
       
        // istanzio un array vuto
        todos : [], 

      }
    },

    methods: {
        getJson(){
            // faccio una chiamata ad axios per ottenere l'oggetto json
            axios.get('./todos.json').then(res=>{
                
                // metto l'oggetto jason nell'array todos
                this.todos = res.data

            })
        }
    },

    mounted() {
        this.getJson();
    },
  }).mount('#app')