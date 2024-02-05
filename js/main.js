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
      
      // ADD TASK
      addNewTask () {
        newTaskCopy = { ...this.newTask };
        this.tasks.push(newTaskCopy);
      },

      // REMOVE TASK
      removeTask (index) {

        this.tasks.splice(index, 1);

      },



    },



  }).mount('#app')