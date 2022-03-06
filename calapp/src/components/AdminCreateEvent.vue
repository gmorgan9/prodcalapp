<template>

  <div>
    <b-jumbotron>
      <p>Create Event</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading event....</div>
    <div v-else>
      <form name="form" @submit.prevent="handleAdd">
        <div class="content">
          <div class="form-group" id="right">
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
          <div class="form-group" id="right">
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
          <div class="form-group" id="right">
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
          <div class="form-group" id="right">
            <label for="reminder_amt">Reminder</label>
            <input
              v-model="reminder_amt"
              type="text"
              class="form-control"
              name="reminder_amt"
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
          </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Add Event</span>
            </button>
            <router-link :to="`/admin`"><button class="btn btn-primary btn-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Back</span>
            </button></router-link>
          </div>
      </form>
      
      <div v-if="message" class="alert alert-danger">
          {{ message }}
        </div>
      </div>
      <div v-if="handleAdd" class="alert alert-success">
          Congrats! Your Event was Created!
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
      Api.addEvent({ user_id: Api.getUserID(), title: this.title, type: this.type, date: this.date, time: this.time, location: this.location, description: this.description, cal_id: this.cal_id, reminder_amt: this.reminder_amt })
        .then(() => {
          this.loading = false;
          // this.$router.push("");

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
.alert {
  margin-top: 2.5%;
  width: 50%;
  margin-left: 25%;
}
form {
  width: 30%;
  margin-left: 35%;
}
#right {
  margin-right: 10px;
}
.btn {
  margin-left: -10px;
  width: 25%;
  margin-top: 2.5%;
}
button:last-child {
  margin-left: 10px;
}
</style>