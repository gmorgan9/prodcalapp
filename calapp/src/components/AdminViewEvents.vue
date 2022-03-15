<template>
  <div>
    <br>
    <h2>Admin page</h2>
    <b-navbar>
     

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link id="nav-link-route" :to="{ path: '/dashboard' }">Dashboard</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/' }">Home</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/create' }">Create</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <hr />


  <div class="admin-content">
    <h5>Events</h5>
        <ul class="list-group">
          <li class="list-group-item" v-for="event in events" :key="event.event_id">
            <div class="title">{{ event.title }}</div>
            <routerlink tag="li" exact v-on:click.native="deleteEvent(event.event_id)">Delete</routerlink>
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
.list-group {
  width: 40%;
  margin-left: 30%; 
  
}
.title {
  padding-top: 1%;
  margin-bottom: -5.5%;
  margin-left: -8%;
}
.event {
  padding: 5px;
  border-radius: 5px;
}
#update-events {
  text-decoration: none;
  color: black;
  float: right;
}
#update-events-btn {
  text-decoration: none;
  color: black;
  float: right;
  margin-left: 1.5%;
}
#nav-link-route {
  text-decoration: none;
  color: black;
}
#nav-link-route:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}

</style>