<template>
  <div class="eventview">
      <h1>Event Title: {{ cal_events.event_title }}</h1>
      <p>{{ cal_events.event_type }}</p>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Event",
  data: function () {
    return {
      loading: false,
      cal_events: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.event_view(this.$route.params.id).then((res) => {
      this.cal_events = res.data[0];
      this.loading = false;
    });
  },
};
</script>
<style>
.eventview {
    border: 2px solid black;
}
</style>
