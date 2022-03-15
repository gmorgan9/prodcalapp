<template>
  <div>
    <!-- <br>
    <h2>Admin page</h2>

    <nav>
         <router-link class="link" :to="{ path: '/dashboard' }">Dashboard &nbsp;</router-link>
         <router-link class="link" :to="{ path: '/logout' }">&nbsp; Logout</router-link>
        </nav>
    <hr /> -->


  <div class="log-header">
    <h2>Events</h2>
    </div>
    <div class="message-content">
      <router-link id="car-btn" :to="`/profile`"><button class="btn btn-outline-secondary">Back</button></router-link>
      <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="event in events" :key="event.event_id">
            <div class="title">{{ event.title }}</div>
            <routerlink id="delete-events" :to="{name: '/adminevents'}" tag="li" exact v-on:click.native="deleteEvent(event.event_id)">Delete</routerlink>
            <router-link id="update-events" :to="`/updateevents/${event.event_id}`">Update</router-link>
          </li>
        </ul>
  </div>
    
</div>
</template>

<script>
import Api from "../api";
export default {
  name: "Admin",
  data: function () {
    return {
      // loading: false,
      events: [],
    };
  },
  created: function () {
    this.loadEvents();
  },
  methods:  {
    loadEvents() {
      // this.loading = true;
      this.events = [];
    Api.getEvent().then((res) => {
      this.events = res.data;
      // this.loading = false;
    });
    },
  deleteEvent(event_id) {
      Api.deleteEvent(event_id)
        .then(() => {
          this.loadEvents();
        })
        .catch((err) => {
          console.log(err);
       });
    },
  },
};

</script>
<style scoped>
.card {
  display: inline-block;
}
#right-card {
  margin-left: 10px;
}
.card-btn {
  margin-bottom: 5px;
}
.title {
  padding-top: 1%;
  margin-bottom: -2.8%;
  margin-left: -8%;
}
.event {
  padding: 5px;
  border-radius: 8.5px;
}
#update-events {
  text-decoration: none;
  color: blue;
  float: right;
  cursor: pointer;
  margin-top: -1.5%
}
#delete-events {
  text-decoration: none;
  color: red;
  float: right;
  cursor: pointer; 
  margin-left: 8px;
  margin-top: -1.5%
}
#update-events-btn {
  text-decoration: none;
  color: black;
  float: right;
  margin-left: 1.5%;
}
.link {
  text-decoration: none;
}

</style>