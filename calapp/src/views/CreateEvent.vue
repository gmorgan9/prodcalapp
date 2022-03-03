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
        <h3 id="date">Date</h3>
        <h3 id="">Time</h3>
        <h3 id="">Location</h3>
        <h3 id="">Description</h3>
      </div>
      

      <form action="">
         <div class="title"><span>Title</span> <input id="title" class="event-form-item" v-model="title" placeholder="event title..."></div>
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
.event-form-item {
    display: flex;
    flex-direction: column;
    margin-left: 43.5%;
    margin-bottom: 10px;
    width:15%;
}
.picker {
    display: flex;
    flex-direction: column;
    margin-left: 43.5%;
    margin-bottom: 10px;
    width: 15.5%;
}
</style>