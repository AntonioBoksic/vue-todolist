const {createApp} = Vue ;

createApp({
data() {
    return {
        logoImage: "lala",
        error: false,
        newTask: "",
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


            
        ]

    }
}
}).mount("#app")
