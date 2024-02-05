const { createApp } = Vue

  createApp({
    data() {
      return {
        
        tasks:[
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: false
          },
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: true
          },
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: true
          },
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: false
          },
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: false
          },
          {
            text:'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
            done: false
          }
        ],

      }

      
    },

    

  }).mount('#app')