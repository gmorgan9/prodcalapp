<template>
  <div>
    <div class="nav">
        <router-link id="nav-link-route" :to="{ path: '/admin' }">Admin</router-link> &nbsp; &nbsp;| &nbsp; &nbsp;   
        <router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link>
      </div>
    <!-- <div v-if="loading">Loading events....</div>
    <ul v-else> -->
      <br />

      <h3>Welcome {{ users.username }}</h3>



      <div class="event-list">
        <h3>Event list</h3>
      <p class="event-links" v-for="event in events" :key="event.event_id">
        <router-link :to="`/event/${event.event_id}`">{{
          event.title
        }}</router-link>
      </p>
      </div>
    <!-- </ul> -->






  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Home",
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
    Api.getUsers().then((res) => {
      this.users = res.data;
      // this.loading = false;
    });
  },
};
</script>
<style>
.nav {
  margin-left: 44.5%;
  
}
#nav-link-route {
  text-decoration: none;
  color: black;
}
#nav-link-route:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}
.event-list {
  margin-left: -2.75%;
}
.event-links {
  display: flex;
  flex-direction: column;
}
</style>