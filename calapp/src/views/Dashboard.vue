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
    <h5>Welcome to the Dashboard!</h5>
<div id="right-card" class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">View/Edit Events</h5>
    <p class="card-text">Follow this link to view and edit events within this calendar.</p>
    <router-link id="car-btn" :to="`/adminevents`"><button class="btn btn-primary">View</button></router-link>
  </div>
</div>
</div>
<hr>
<router-link id="car-btn" :to="`/superadmin`"><button class="btn btn-primary">Admin</button></router-link>
    
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
      users: [],
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

</style>