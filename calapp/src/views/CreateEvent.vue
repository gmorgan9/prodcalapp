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
          <div class="FormDate">
         <input
           class="FormDate__input FormDate__input--day"
           type="number"
           placeholder="dd">
         <span class="FormDate__divider">/</span>
         <input
           class="FormDate__input FormDate__input--month"
           type="number"
           placeholder="mm">
         <span class="FormDate__divider">/</span>
         <input
           class="FormDate__input FormDate__input--year"
           type="number"
           placeholder="yyyy">
            </div>
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