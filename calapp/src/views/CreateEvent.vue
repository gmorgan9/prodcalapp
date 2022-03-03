<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
    <div class="content">
      <div class="left-side">
        <h3 id="title_block">Title</h3>
        <h3 id="type_block">Type</h3>
        <h3 id="date_block">Date</h3>
        <h3 id="time_block">Time</h3>
        <h3 id="location_block">Location</h3>
        <h3 id="description_block">Description</h3>
      </div>
      <form action="">
        <input id="title" class="event-form-item" v-model="title" placeholder="event title...">
          <input id="type" class="event-form-item" v-model="type" placeholder="event type...">
          <datepicker id="date" class="picker" v-model="date" ><input type="date" name="date"></datepicker>
          <vue-timepicker id="time" class="picker" v-model="time"><input type="time" name="time"></vue-timepicker>
          <input id="location" class="event-form-item" v-model="location" placeholder="event location...">
          <textarea id="description" class="event-form-item" v-model="description" placeholder="event description..."></textarea>
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
  display: grid;
  grid-template-columns: repeat(2, 3fr);
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
#title {
  grid-column: 2 / 2;
    grid-row: 1;
}
#type_block {
  grid-column: 1 / 2;
    grid-row: 2;
}
#type {
  grid-column: 2 / 2;
    grid-row: 2;
}
#date_block {
  grid-column: 1 / 2;
    grid-row: 3;
}
#date {
  grid-column: 2 / 2;
    grid-row: 3;
}
#time_block {
  grid-column: 1 / 2;
    grid-row: 4;
}
#time {
  grid-column: 2 / 2;
    grid-row: 4;
}
#location_block {
  grid-column: 1 / 2;
    grid-row: 5;
}
#location {
  grid-column: 2 / 2;
    grid-row: 5;
}
#description_block {
  grid-column: 1 / 2;
    grid-row: 6;
}
#description {
  grid-column: 2 / 2;
    grid-row: 6;
}
</style>