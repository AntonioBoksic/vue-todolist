const {createApp} = Vue ;

createApp({
data() {
    return {
        logoImage: "lala",
        error: false,
        newTask: {
            text: "",
            done: "false"
        },
        tasks : [ 

            {
            text: "fare operazione 1",
            done: true,
            },

            {
            text: "fare operazione 2",
            done: false,
            },

            {
            text: "fare operazione 3",
            done: true,
            },
            {
            text: "fare operazione 4",
            done: false,
            },
 
        ],

    }
},
methods: {
    aggiungiTask() {
        if(this.newTask !== "") { //solo se la stringa è vuota:
        this.tasks.unshift(this.newTask);
        }
        this.newTask = {}
        
    },
    rimuoviTask(indice) {
        //console.log(indice)
        this.tasks.splice(indice,1)
    }
}

}).mount("#app")
