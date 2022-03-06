<template>
  <div>
    <br>
    <h2>Home Page</h2>

<ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link id="nav-link-route" :to="{ path: '/admin' }">Admin</router-link>  
  </li>
  &nbsp; | &nbsp;
  <li class="nav-item">
    <router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link>
  </li>
</ul>
      <hr>
    <!-- <div v-if="loading">Loading events....</div>
    <ul v-else> -->
      <br />
      <ul class="list-group">
        <li class="list-group-item" v-for="event in events" :key="event.event_id">
          <router-link id="events" :to="`/event/${event.event_id}`">{{
          event.title
        }}</router-link>
        </li>
      </ul>
    <!-- </ul> -->



<div class="cal_day">
    <div class="row_1">
        <div class="box_1">
            1
        </div>
        <div class="box_2">
            2
        </div>
        <div class="box_3">
            3
        </div>
        <div class="box_4">
            4
        </div>
        <div class="box_5">
            5
        </div>
        <div class="box_6">
            6
        </div>
        <div class="box_7">
            7
        </div>
    </div>
    <div class="row_2">
        <div class="box_1">
            8
        </div>
        <div class="box_2">
            9
        </div>
        <div class="box_3">
            10
        </div>
        <div class="box_4">
            11
        </div>
        <div class="box_5">
            12
        </div>
        <div class="box_6">
            13
        </div>
        <div class="box_7">
            14
        </div>
    </div>
    <div class="row_3">
        <div class="box_1">
            15
        </div>
        <div class="box_2">
            16
        </div>
        <div class="box_3">
            17
        </div>
        <div class="box_4">
            18
        </div>
        <div class="box_5">
            19
        </div>
        <div class="box_6">
            20
        </div>
        <div class="box_7">
            21
        </div>
    </div>
    <div class="row_4">
        <div class="box_1">
            22
        </div>
        <div class="box_2">
            23
        </div>
        <div class="box_3">
            24
        </div>
        <div class="box_4">
            25
        </div>
        <div class="box_5">
            26
        </div>
        <div class="box_6">
            27
        </div>
        <div class="box_7">
            28
        </div>
    </div>
    <div class="row_2">
        <div class="box_1">
            29
        </div>
        <div class="box_2">
            30
        </div>
        <div class="box_3">
            31
        </div>
        <div class="box_4">
            1
        </div>
        <div class="box_5">
            2
        </div>
        <div class="box_6">
            3
        </div>
        <div class="box_7">
            4
        </div>
    </div>
</div>












  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Home",
  data: function () {
    return {
      // loading: false,
      events: [],
    };
  },
  created: function () {
    // this.loading = true;
    Api.getEvent().then((res) => {
      this.events = res.data;
      // this.loading = false;
    });
  },
};
</script>
<style>
.list-group {
  width: 50%;
  margin-left: 25%; 
}
#events {
  text-decoration: none;
  color: black;
  text-transform: capitalize;
}
#events:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}
#nav-link-route {
  text-decoration: none;
  color: black;
}
#nav-link-route:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}
.event-list {
  margin-left: -2.75%;
}
.event-links {
  display: flex;
  flex-direction: column;
}
</style>