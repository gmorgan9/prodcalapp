<template>
  <div>
    <br>
    <div v-if="loading">Loading event....</div>
    <div class="jumbotron" v-else>
        <div class="log-header">
            <h1 style="text-transform:capitalize;">{{ event.title }}</h1>
            <h3 style="text-transform:capitalize;">{{ event.type }}</h3>
        </div>
        <div class="message-content">
            <h3 class="display-10">Date</h3> <p> {{ event.date }} </p>
            <h3 class="display-10">Time Of Day</h3> <p> {{ event.time }} </p>
            <h3 class="display-10">Location</h3> <p v-if= "!!event.location"> {{ event.location }}</p> <p v-else>NONE</p>
            <h3 class="display-10">Reminder</h3> <p v-if= "!!event.reminder"> {{ event.reminder }} Minute(s)</p> <p v-else>NONE</p>
            <h3 class="display-10">Description</h3> <p v-if= "!!event.description"> {{ event.description }}</p> <p v-else>NONE</p>
            <router-link to="/"><button class="btn btn-primary">Back</button></router-link>
        </div>
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


.log-header {
    width: 40%;
    margin: 50px auto 0px;
    color: white;
    background: #002E5D;
    text-align: center;
    border: 1px solid #002E5D;
    border-bottom: none;
    border-radius: 10px 10px 0px 0px;
    padding: 20px;
}

.message-content {
    width: 40%;
    margin: 0px auto;
    padding: 20px;
    border: 1px solid #B0C4DE;
    background: white;
    border-radius: 0px 0px 10px 10px;
}




</style>
