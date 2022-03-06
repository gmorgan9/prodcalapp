<template>
  <div>
    
    <div v-if="loading">Loading event....</div>
    <div v-else>
      <h1>{{ event.title }}</h1>
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
            <p v-if= "!!event.reminder_amt"> {{ event.reminder_amt }} Minute(s)</p>
            <p v-else>NONE</p>
        </div>
        <div class="desc_block">
            <h3>Description</h3>
            <p v-if= "!!event.description"> {{ event.description }}</p>
            <p v-else>NONE</p>
        </div>
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
.type {
    color: gray;
    margin-top: -20px;
    text-transform: capitalize;
}
.content {
display: grid;
    grid-template-columns: repeat(2, 2fr);
}
.date_block {
    grid-column: 1 / 2;
    grid-row: 1;
}
.time_block {
    grid-column: 1 / 2;
    grid-row: 2;
}
.location_block {
    grid-column: 1 / 2;
    grid-row: 3;
}
.reminder_block {
    grid-column: 1 / 2;
    grid-row: 4;
}
.date_block,
.time_block,
.location_block,
.reminder_block,
.desc_block {
    text-align: left;
    margin-bottom: -2%;
}
.date_block h3,
.time_block h3,
.location_block h3,
.reminder_block h3 {
    background: gray;
    color: white;
    text-transform: uppercase;
    width: 27.5%;
    margin-left: 70%;
    padding-left: 5px;
}
.date_block p,
.time_block p,
.location_block p,
.reminder_block p {
    width: 27.5%;
    margin-left: 70%;
    padding-left: 2px;
}
.desc_block {
    grid-column: 2 / 2;
    grid-row: 1;
}
.desc_block h3 {
    background: rgb(22, 105, 153);
    color: white;
    text-transform: uppercase;
    width: 27.5%;
    margin-right: 5%;
    margin-left: 2%;
    padding-left: 5px;
}
.desc_block p {
    width: 27.5%;
    margin-right: 5%;
    margin-left: 2%;
    padding-left: 2px;
    margin-top: -2%;
}

</style>
