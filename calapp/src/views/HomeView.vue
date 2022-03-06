<template>
  <div>
    <div class="nav">

      <div v-if="loggedin === 0">
        <router-link :to="{ path: '/admin' }">Admin</router-link>
      </div>
      <div v-else>
        <router-link class="nav-link" :to="`/login`">Login</router-link>
        <router-link class="nav-link" :to="`/register`">Register</router-link>
      </div>
    </div>
    <!-- <div v-if="loading">Loading events....</div>
    <ul v-else> -->
    
      <br />
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
  },
};
</script>
<style>
.nav {
  margin-left: 44.5%;
}
.nav-link {
  text-decoration: none;
  color: black;
}
.nav-link:hover {
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