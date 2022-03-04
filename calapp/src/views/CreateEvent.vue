<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->

    <router-link to="/">Back</router-link>
    <div v-if="loading">Loading article....</div>
    <div v-else>
      <form action="">
        <div class="content">
          <div class="title"><h3>Title</h3><input v-model="title" placeholder="event title..."></div>
          <div class="type"><h3>Type</h3><input v-model="type" placeholder="event type..."></div>
          <div class="date"><h3>Date</h3><datepicker v-model="date" ><input type="date" name="date"></datepicker></div>
          <div class="time"><h3>Time</h3><vue-timepicker v-model="time"><input type="time" name="time"></vue-timepicker></div>
          <div class="location"><h3>Location</h3><input v-model="location" placeholder="event location..."></div>
          <div class="description"><h3>Description</h3><textarea v-model="description" placeholder="event description..."></textarea></div>
        </div>
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
      loading: false,
      events: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getEvent().then((res) => {
      this.events = res.data;
      this.loading = false;
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
form {
  display: flex;
  flex-direction: column;
}
/* .content {
  
} */
/* .title h3 {
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
.title input {
  grid-column: 2 / 2;
  grid-row: 1;
}
.type input {
  grid-column: 2 / 2;
  grid-row: 2;
}
.date input {
    grid-column: 2 / 2;
    grid-row: 3;
}
.time input {
    grid-column: 2 / 2;
    grid-row: 4;
}
.location input {
    grid-column: 2 / 2;
    grid-row: 5;
}
.description input {
    grid-column: 2 / 2;
    grid-row: 6;
} */
.title h3,
.type h3,
.date h3,
.time h3,
.location h3,
.description h3 {
  margin-bottom: -2%;
  text-align: right;
  background: gray;
  color: white;
  text-transform: uppercase;
  width: 10%;
  margin-right: px;
  margin-left: 40%;
  padding-right: 5px;
}
.title input,
.type input,
.date input,
.time input,
.location input,
.description textarea {
  margin-left: 250px;
  width: 20%;
  /* margin-left: 70%; */
  /* padding-left: 2px; */
  /* margin-top: -2%; */
}
textarea {
  padding-bottom: 25px;
}
</style>