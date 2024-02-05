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

        // TEXT STYLE
        doneStyle: 'text-decoration-line-through',

      }  
    },

    methods: {
      
      // ADD TASK
      addNewTask () {
        newTaskCopy = { ...this.newTask };
        this.tasks.push(newTaskCopy);
        this.newTask.text = '';
      },

      // REMOVE TASK
      removeTask (index) {
        this.tasks.splice(index, 1);
      },

      // CHANGE TASK STATUS
      taskDone(task) {
        task.done = !task.done;
      }

    },

  }).mount('#app')