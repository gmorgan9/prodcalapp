<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading articles....</div>
    <ul v-else>
      <li v-for="events in event" :key="events.id">
        {{ events.title }} &nbsp; | &nbsp; {{ events.type }}
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Event",
  data: function () {
    return {
      loading: false,
      event: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getEvent().then((res) => {
      this.event = res.data;
      this.loading = false;
    });
  },
};
</script>
