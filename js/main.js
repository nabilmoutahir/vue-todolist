const { createApp } = Vue

  createApp({
    // DATA
    data() {
      return {
        
        // ARRAY TASKS
        tasks: [
         
        ],

        // NUOVA TASK AGGIUNTA
        newTask: {
          text:'',
          done:false
        },

        // TEXT VALUE
        clearValue:'',

      }  
    },

    methods: {
      
      addNewTask () {
        newTaskCopy = { ...this.newTask };
        this.tasks.push(newTaskCopy);
      }

    },



  }).mount('#app')