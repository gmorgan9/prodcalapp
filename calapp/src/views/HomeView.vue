<template>
  <div>
    <br>
    <h2>Home Page</h2>

        <nav>
         <router-link class="link" :to="{ path: '/dashboard' }">Dashboard</router-link>
       | <router-link class="link" :to="{ path: '/logout' }">Logout</router-link>
        </nav>
    <hr />




      <router-link :to="{ path: '/create' }"><button class="btn btn-outline-secondary">+ Create Event</button></router-link>
      <br />
      <div class="log-header">
        <h3>Event List</h3>
      </div>
      <div class="message-content">
      <ul class="list-group">
        <li class="list-group-item" v-for="event in events" :key="event.event_id">
          <router-link id="events" :to="`/event/${event.event_id}`">{{
          event.title
        }}</router-link>
        </li>
      </ul>
      </div>
    <!-- </ul> -->


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
  width: 30%;
  margin-left: 35%; 
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
.link {
  text-decoration: none;
}
.event-list {
  margin-left: -2.75%;
}
.event-links {
  display: flex;
  flex-direction: column;
}

</style>