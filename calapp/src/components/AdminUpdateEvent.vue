<template>
  <div>
        <br>
        <h2>Update Event</h2>
    <div v-if="loading">Loading event...</div>
    <div v-else>
        <hr>
      <form name="form" @submit.prevent="handleSave">
        <div>
          <div class="form-group">
            <label for="id">Event Id</label>
            <input
              v-model="event.event_id"
              type="text"
              class="form-control"
              name="id"
              readonly
            />
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              v-model="event.title"
              type="text"
              class="form-control"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="type">Type</label>
            <input
              v-model="event.type"
              type="text"
              class="form-control"
              name="type"
            />
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input
              v-model="event.date"
              type="date"
              class="form-control"
              name="date"
            />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input
              v-model="event.time"
              type="time"
              class="form-control"
              name="time"
            />
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input
              v-model="event.location"
              type="text"
              class="form-control"
              name="location"
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              v-model="event.description"
              type="text"
              class="form-control"
              name="description"
            />
          </div>
          <div class="form-group">
            <label for="reminder">Reminder</label>
            <input
              v-model="event.reminder"
              type="number"
              class="form-control"
              name="reminder"
            />
          </div>
          <div class="form-group">
            <label for="cal_id">Cal Id</label>
            <input
              v-model="event.cal_id"
              type="number"
              class="form-control"
              name="cal_id"
              readonly
            />
          </div>


          <div class="form-group">
            <button class="btn btn-outline-secondary" :disabled="saving">
              <span
                v-show="saving"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Save</span>
            </button>
            <router-link :to="`/adminevents`"><button class="btn btn-outline-secondary" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Back</span>
            </button></router-link>
          </div>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "AdminUpdateEvent",
  data: function () {
    return {
      loading: false,
      saving: false,
      event: null,
    };
  },
  methods: {
    loadEventDetail() {
      this.loading = true;
      Api.getEventDetail(this.$route.params.event_id).then((res) => {
        this.event = res.data[0];
        this.loading = false;
      });
    },
    handleSave() {
      this.saving = true;
      Api.updateEvent(this.event)
        .then(() => {
          this.saving = false;
          this.$router.push("/adminevents");
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
  created: function () {
    this.loadEventDetail();
  },
};
</script>
<style scoped>
.form-control {
    width: 50%;
    margin-left: 25%;
}
</style>