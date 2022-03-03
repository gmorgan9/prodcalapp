<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
    <div class="content">
      <form action="">
        <div class="title"><h3>Title</h3><input class="event-form-item" v-model="title" placeholder="event title..."></div>
        <div class="type"><h3>Type</h3><input class="event-form-item" v-model="type" placeholder="event type..."></div>
        <div class="date"><h3>Date</h3><datepicker id="date" class="picker" v-model="date" ><input type="date" name="date"></datepicker>
        <div class="time"><h3>Time</h3><vue-timepicker id="time" class="picker" v-model="time"><input type="time" name="time"></vue-timepicker>
        <div class="location"><h3>Location</h3><input id="location" class="event-form-item" v-model="location" placeholder="event location...">
        <div class="description"><h3>Description</h3><textarea id="description" class="event-form-item" v-model="description" placeholder="event description..."></textarea>
      </form>
    </div>


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
.content {
  margin-left: 37.5%;
}
.event-form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width:15%;
}
.picker {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 15.5%;
}
#title_block {
  grid-column: 1 / 2;
    grid-row: 1;
}
.title,
.type,
.date,
.time,
.location,
.description {
  display: flex;
}
.title h3,
.type h3,
.date h3,
.time h3,
.location h3,
.description h3 {
  margin-right: 10px;
  background: gray;
  color: white;
  text-transform: uppercase;
}
</style>