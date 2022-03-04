<template>
  <div>
    <br />
    <div v-if="loading">Loading events....</div>
    <ul v-else>
      <br /><br />
      <h1 v-if="{id}">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <router-link class="nav-link" :to="`/login`">Login</router-link> | 
    <router-link class="nav-link" :to="`/register`">Register</router-link>
      <br /><br />
      <li v-for="event in events" :key="event.event_id">
        <router-link :to="`/event/${event.event_id}`">{{
          event.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Home",
  data: function () {
    return {
      loading: false,
      events: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getEvent().then((res) => {
      this.events = res.data;
      this.loading = false;
    });
  },
};
</script>
<style>
.nav-link {
  text-decoration: none;
  color: black;
}
.nav-link:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}
</style>