<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
      <form action="">
          <input class="event-form-item" v-model="title" placeholder="event title...">
          <input class="event-form-item" v-model="type" placeholder="event type...">
          <datepicker id="picker" v-model="date" class="event-form-item"><input type="date" name="date"></datepicker>
          <vue-timepicker id="picker" v-model="time" class="event-form-item"><input type="time" name="time"></vue-timepicker>
          <input class="event-form-item" v-model="location" placeholder="event location...">
      </form>



    <!-- </ul> -->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue-time-picker'
import Api from "../api";
export default {
  name: "create",
  data: function () {
    return {
      Datepicker,
      VueTimepicker,
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
.event-form-item {
    display: flex;
    flex-direction: column;
    margin-left: 43.5%;
    margin-bottom: 10px;
    width:10%;
}
#picker {
  width: 2%;
}
</style>