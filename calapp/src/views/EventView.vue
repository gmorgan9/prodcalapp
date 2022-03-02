<template>
  <div class="cal_event">
    <div v-if="loading">Loading events....</div>
    <div v-else>
        <h1>{{ event.title }}</h1>
        <h3 class="type">{{ event.type }}</h3>
        <div class="left-side">
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
            <p>NONE</p>
        </div>
        <div class="reminder_block">
            <h3>Reminder</h3>
            <p>NONE</p>
            <!-- <p> {{ reminder.alert_amt }} </p> -->
        </div>
        </div>
        <div class="right-side">
        <div class="desc_block">
            <h3>Description</h3>
            <p> {{ event.description }} </p>
        </div>
        </div>
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
    display: inline;
}
.type {
    color: gray;
    margin-top: -20px;
    text-transform: capitalize;
}
.left-side {
    float: left;
}
.left-side {
    float: right;
}
.date_block,
.time_block,
.location_block,
.reminder_block {
    text-align: left;
}
.date_block h3,
.time_block h3,
.location_block h3,
.reminder_block h3 {
    /* border: 1px solid black; */
    background: gray;
    color: white;
    text-transform: uppercase;
    width: 15%;
    margin-left: 30%;
    padding-left: 2px;
}
.date_block p,
.time_block p,
.location_block p,
.reminder_block p {
    width: 15%;
    margin-left: 30%;
    padding-left: 2px;
}
.desc_block {
    /* float: right; */
}

</style>
