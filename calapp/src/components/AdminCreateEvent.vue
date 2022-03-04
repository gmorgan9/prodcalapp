<template>

  <div>
    <b-jumbotron>
      <p>Create Event</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
    <router-link to="/admin"><button>Back</button></router-link>
    <div v-if="loading">Loading event....</div>
    <div v-else>
      <form name="form" @submit.prevent="handleAdd">
        <div class="content">
        
{{ user_id }}
          <!-- <div class="form-group">
            <label for="user_id">User ID</label>
            <input
              v-model.number="user_id"
              type="number"
              class="form-control"
              name="user_id"
              />
              </div> -->
          <div class="form-group">
            <label for="title">Title</label>
            <input
              v-model="title"
              type="text"
              class="form-control"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="type">Type</label>
            <input
              v-model="type"
              type="text"
              class="form-control"
              name="type"
            />
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <datepicker>
            <input
              v-model="date"
              type="date"
              class="form-control"
              name="date"
            />
            </datepicker>
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <vue-timepicker>
            <input
              v-model="time"
              type="time"
              class="form-control"
              name="time"
            />
            </vue-timepicker>
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input
              v-model="location"
              type="text"
              class="form-control"
              name="location"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              v-model="description"
              type="text"
              class="form-control"
              name="description"
            />
          </div>
          <div class="form-group">
            <label for="cal_id">Cal_id</label>
            <input
              v-model="cal_id"
              type="text"
              class="form-control"
              name="cal_id"
            />
          </div>
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
  name: "AdminCreateEvent",
  data() {
    return {
      title: "",
      type: "",
      date: "",
      time: "",
      location: "",
      description: "",
      loading: false,
      message: "",
      VueTimepicker,
      Datepicker,
      user_id,
    };
  },
  methods: {
    handleAdd() {
      this.loading = true;
      this.message = "";
      Api.addEvent({ title: this.title, type: this.type, date: this.date, time: this.time, location: this.location, description: this.description, cal_id: this.cal_id })
        .then(() => {
          this.loading = false;
          this.$router.push("/admin/");
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
form {
  display: flex;
  flex-direction: column;
}
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
}
textarea {
  padding-bottom: 25px;
}
</style>