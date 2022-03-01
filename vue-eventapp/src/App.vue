// src/App.vue
    
    <template>
      <div id="app">
        <div class="main">
          <div class="calendar-holder">
            <calendar :events="events" />
          </div>
          <div class="form-holder">
            <h3>Schedule an event</h3>
            <event-form />
          </div>
        </div>
      </div>
    </template>
    <script>
    import Calendar from './components/Calendar.vue'
    import EventForm from './components/EventForm.vue'
    import Pusher from 'pusher-js';
    
    export default {
      name: 'app',
      components: {
        ...
      },
      data(){
        ...  
      },
      created(){
        const pusher = new Pusher('PUSHER_KEY', {
          cluster: 'PUSHER_CLUSTER',
          encrypted: true,
        });
        const channel = pusher.subscribe('schedule');
        channel.bind('new-event', (data) => {
          this.events = [
            ...this.events,
            data
          ];
        })
      }
    }
    </script>
    <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    .main {
      display: flex;
      align-items: center;
    }
    .calendar-holder {
      width: 65%;
    }
    .form-holder {
      width: 35%;
    }
    .form-holder > h3 {
      color: orangered;
      text-transform: uppercase;
      font-size: 16px;
      text-align: left;
      margin-left: 30px;
      margin-bottom: 10px;
    }
    </style>