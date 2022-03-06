<template>
  <div>
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
  <h4>
    Welcome to the Admin Dashboard!
  </h4>


      <div class="admin-event-list">
          <h3>Admin Event list</h3>
        <div class="admin-event-links" v-for="event in events" :key="event.event_id">
          <p>{{ event.title }}</p>
          <router-link id="eventLink" :to="`/update/${event.event_id}`">update</router-link>
        </div>
      </div>



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
    // this.loading = true;
    Api.getEvent().then((res) => {
      this.events = res.data;
      // this.loading = false;
    });
  },
};
</script>
<style scoped>
.admin-event-links {
  display: flex;
  flex-direction: row;
  margin-left: 40%;
}
#eventLink {
  text-align: right;
  margin-left: 10px;
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