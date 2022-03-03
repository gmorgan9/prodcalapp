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
        <div class="date"><h3>Date</h3><datepicker id="date" class="picker" v-model="date" ><input type="date" name="date"></datepicker></div>
        <div class="time"><h3>Time</h3><vue-timepicker id="time" class="picker" v-model="time"><input type="time" name="time"></vue-timepicker></div>
        <div class="location"><h3>Location</h3><input id="location" class="event-form-item" v-model="location" placeholder="event location..."></div>
        <div class="description"><h3>Description</h3><textarea id="description" class="event-form-item" v-model="description" placeholder="event description..."></textarea></div>
      </form>
    </div>

    <div>
    <router-link to="/">Back</router-link>
    <div v-if="loading">Loading article....</div>
    <div v-else>
      <form action="">
        <div class="content">
          <div class="title"><h3>Title</h3><input class="event-form-item" v-model="title" placeholder="event title..."></div>
          <div class="type"><h3>Type</h3><input class="event-form-item" v-model="type" placeholder="event type..."></div>
          <div class="date"><h3>Date</h3><datepicker id="date" class="picker" v-model="date" ><input type="date" name="date"></datepicker></div>
          <div class="time"><h3>Time</h3><vue-timepicker id="time" class="picker" v-model="time"><input type="time" name="time"></vue-timepicker></div>
          <div class="location"><h3>Location</h3><input id="location" class="event-form-item" v-model="location" placeholder="event location..."></div>
          <div class="description"><h3>Description</h3><textarea id="description" class="event-form-item" v-model="description" placeholder="event description..."></textarea></div>
        <div class="time_block">
            <h3>Time Of Day</h3>
            <p> {{ event.time }} </p>
        </div>
        <div class="location_block">
            <h3>Location</h3>
            <p> {{ event.location }} </p>
            <p>NONE</p>
        </div>
        <div class="reminder_block">
            <h3>Reminder</h3>
            <p>NONE</p>
        </div>
        <div class="desc_block">
            <h3>Description</h3>
            <p> {{ event.description }} </p>
        </div>
        </div>
    </div>
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
/* .content {
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
} */
.content {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
}
.title h3 {
  grid-column: 1 / 2;
  grid-row: 1;
}
.type h3 {
  grid-column: 1 / 2;
  grid-row: 2;
}
.date h3 {
    grid-column: 1 / 2;
    grid-row: 3;
}
.time h3 {
    grid-column: 1 / 2;
    grid-row: 4;
}
.location h3 {
    grid-column: 1 / 2;
    grid-row: 5;
}
.description h3 {
    grid-column: 1 / 2;
    grid-row: 6;
}
.title p {
  grid-column: 2 / 2;
  grid-row: 1;
}
.type p {
  grid-column: 2 / 2;
  grid-row: 2;
}
.date p {
    grid-column: 2 / 2;
    grid-row: 3;
}
.time p {
    grid-column: 2 / 2;
    grid-row: 4;
}
.location p {
    grid-column: 2 / 2;
    grid-row: 5;
}
.description p {
    grid-column: 2 / 2;
    grid-row: 6;
}

.title,
.type,
.date,
.time,
.location,
.description {
    text-align: left;
    margin-bottom: -2%;
}
.title h3,
.type h3,
.date h3,
.time h3,
.location h3,
.description h3 {
    background: gray;
    color: white;
    text-transform: uppercase;
    width: 27.5%;
    margin-left: 70%;
    padding-left: 5px;
}
.title input,
.type input,
.date input,
.time input,
.location input,
.description input {
    width: 27.5%;
    margin-left: 70%;
    padding-left: 2px;
    margin-top: -2%;
}
.desc_block {
    grid-column: 2 / 2;
    grid-row: 1;
}
.desc_block h3 {
    background: rgb(22, 105, 153);
    color: white;
    text-transform: uppercase;
    width: 27.5%;
    margin-right: 5%;
    margin-left: 2%;
    padding-left: 5px;
}
.desc_block p {
    width: 27.5%;
    margin-right: 5%;
    margin-left: 2%;
    padding-left: 2px;
    margin-top: -2%;
}
</style>