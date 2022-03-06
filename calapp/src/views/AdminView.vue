<template>
  <div>
    <br>
    <h2>Admin page</h2>
    <b-navbar>
      <b-nav-item><router-link id="nav-link-route" :to="{ path: '/' }">Home</router-link></b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/create' }">Create</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <hr />




  <div class="admin-content">
    <h5>Welcome to the Admin Dashboard!</h5>
        <ul class="list-group">
          <li class="list-group-item" v-for="event in events" :key="event.event_id">
            <div class="title">{{ event.title }}</div>
            <button id="update-events-btn" class="event alert-danger" @click="() => deleteEvent(event.event_id)">Delete</button>
            <router-link id="update-events" :to="`/update/${event.event_id}`"><button class="event alert-primary">Update</button></router-link>
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
.list-group {
  width: 50%;
  margin-left: 25%; 
  
}
.title {
  padding-top: 1.20%;
  margin-bottom: -4%;
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