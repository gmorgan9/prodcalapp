<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
      <li v-for="cal_event in cal_events" :key="cal_events.event_id">
        <router-link :to="`event/${cal_events.event_id}`">{{
          cal_events.event_title
        }}</router-link>
      </li>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Home",
  data: function () {
    return {
      cal_event: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.cal_events().then((res) => {
      this.cal_events = res.data;
      this.loading = false;
    });
  },
};
</script>