<template>
  <div class="cal_event">
    <div v-if="loading">Loading events....</div>
    <div v-else>
      <h1>{{ event.title }}</h1>
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
</style>
