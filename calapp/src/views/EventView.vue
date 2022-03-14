<template>
  <div>
    <br>
    <div v-if="loading">Loading event....</div>
    <div v-else>
      <h1 class="title">{{ event.title }}</h1>
        <h3 class="type">{{ event.type }}</h3>
        <div class="content">
        <div class="date_block">
            <h3>Date</h3>
           <p> {{ event.date }} </p>
        </div>
        <div class="time_block">
            <h3>Time Of Day</h3>
            <p> {{ event.time }} </p>
        </div>
        <div class="location_block">
            <h3>Location</h3>
            <p v-if= "!!event.location"> {{ event.location }}</p>
            <p v-else>NONE</p>
        </div>
        <div class="reminder_block">
            <h3>Reminder</h3>
            <p v-if= "!!event.reminder"> {{ event.reminder }} Minute(s)</p>
            <p v-else>NONE</p>
        </div>
        <div class="desc_block">
            <h3>Description</h3>
            <p v-if= "!!event.description"> {{ event.description }}</p>
            <p v-else>NONE</p>
        </div>
        
        </div>
        <router-link to="/"><button class="btn btn-primary">Back</button></router-link>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "event",
  data: function () {
    return {
      loading: false,
      event: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getEventDetail(this.$route.params.event_id).then((res) => {
      this.event = res.data[0];
      this.loading = false;
    });
  },
};
</script>




<style>


</style>
