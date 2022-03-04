<template>
  <div>
    <br />
    <div v-if="loading">Loading events....</div>
    <ul v-else>
      <br /><br />
    <router-link :to="`/login`">Login</router-link>
    <router-link :to="`/register`">Register</router-link>
      <br /><br />
      <li v-for="event in events" :key="event.id">
        <router-link :to="`/event/${event.id}`">{{
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