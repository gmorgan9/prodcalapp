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
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Add Event</span>
            </button>
          </div>
        </div>
      </form>
      <div v-if="message" class="alert alert-danger">
        {{ message }}
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
      title: "",
      type: "",
      date: "",
      time: "",
      location: "",
      description: "",
      loading: false,
    };
  },
  methods: {
    handleAdd() {
      this.loading = true;
      this.message = "";
      Api.addEvent({ title: this.title, type: this.type, date: this.date, time: this.time, location: this.location, description: this.desctiption })
        .then(() => {
          this.loading = false;
          // this.$router.push("/admin/");
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
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
  margin-right: 100px;
  margin-left: 38.5%;
  padding-right: 5px;
}
.title input,
.type input,
.date input,
.time input,
.location input,
.description textarea {
  width: 15%;
  margin-left: 15%;
  /* padding-left: 2px; */
  /* margin-top: -2%; */
}
textarea {
  padding-bottom: 25px;
}
</style>