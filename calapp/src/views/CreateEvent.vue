<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
      <form action="">
          <input v-model="title" placeholder="event title...">
          <input v-model="type" placeholder="event type...">
          <datepicker></datepicker>
          <input v-model="time" placeholder="event time...">
          <input v-model="location" placeholder="event location...">
      </form>



    <!-- </ul> -->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Api from "../api";
export default {
  name: "create",
  data: function () {
    return {
      Datepicker
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
input {
    display: flex;
    flex-direction: column;
    margin-left: 43.5%;
    margin-bottom: 10px;
}
</style>