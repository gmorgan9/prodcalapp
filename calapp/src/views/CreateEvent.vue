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
          <input v-model="type" placeholder="event type...">
          <mdb-date-picker-2 v-model="date" label="Basic example" title="Select date" />
      </form>



    <!-- </ul> -->
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "create",
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
input {
    display: flex;
    flex-direction: column;
    margin-left: 45%;
    margin-bottom: 10px;
}
</style>