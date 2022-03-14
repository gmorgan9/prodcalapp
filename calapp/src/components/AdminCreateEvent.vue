<template>

  <div>
    <b-jumbotron>
      <br>
      <h2>Create Event</h2>
    </b-jumbotron>
    <div v-if="loading">Loading event....</div>
    <div v-else>
      <hr>
      <form name="form" @submit.prevent="handleAdd" v-if="!savingSuccessful">
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
            <input
              v-model="date"
              type="date"
              class="form-control"
              name="date"
            />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input
              v-model="time"
              type="time"
              class="form-control"
              name="time"
            />
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
            <label for="reminder">Reminder</label>
            <input
              v-model="reminder"
              type="number"
              class="form-control"
              name="reminder"
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
            <router-link :to="`/dashboard`"><button class="btn btn-primary btn-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Back</span>
            </button></router-link>
            
          </div>
      </form>
      
      <div v-if="message" class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ message }}
        </div>
      </div>
      
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "AdminCreateEvent",
  data: function() {
    return {
      user_id: Api.getUserID(),
      title: "",
      type: "",
      date: "",
      time: "",
      location: "",
      description: "",
      reminder_amt: "",
      loading: false,
      message: "",
      // VueTimepicker,
      // Datepicker,
    };
  },
created: function() {
    var id = Api.getUserID()
    console.log(id)
},
  methods: {
    handleAdd() {
      this.loading = true;
      this.message = "";
      Api.addEvent({ user_id: Api.getUserID(), title: this.title, type: this.type, date: this.date, time: this.time, location: this.location, description: this.description, cal_id: this.cal_id, reminder: this.reminder })
        .then(() => {
          this.loading = false;
          this.$router.push("/dashboard/");
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
.form-control {
    width: 50%;
    margin-left: 25%;
}
.alert {
  margin-top: 2.5%;
  width: 50%;
  margin-left: 25%;
}
.btn {
  margin-top: 2.5%;
} 
button:last-child {
  margin-left: 10px;
}
</style>