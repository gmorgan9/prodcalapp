<template>
  <div class="cal_event">
    <div v-if="loading">Loading events....</div>
    <div v-else>
        <h1>{{ event.title }}</h1>
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
            <p> {{ event.location }} </p>
        </div>
        <div class="reminder_block">
            <h3>Reminder</h3>
            <!-- <p> {{ reminder.alert_amt }} </p> -->
        </div>
      <p>{{ event.type }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Event",
  data: function () {
    return {
      loading: false,
      event: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getEvent(this.$route.params.id).then((res) => {
      this.event = res.data[0];
      this.loading = false;
    });
  },
};
</script>
<style>
.cal_event {
    border: 1px solid black;
}
.date_block,
.time_block {
    text-align: left;
}
.date_block h3,
.time_block h3 {
    /* border: 1px solid black; */
    background: gray;
    color: white;
    text-transform: uppercase;
    width: 20%;
    margin-left: 5%;
    padding-left: 2px;
}
.date_block p,
.time_block p {
    width: 20%;
    margin-left: 5%;
    padding-left: 2px;
}

</style>
