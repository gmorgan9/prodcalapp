<template>
  <div>
    <br>
    <h2>Admin page</h2>
    <b-navbar>
      <b-nav-item><router-link id="nav-link-route" :to="{ path: '/' }">Home</router-link></b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/create' }">Create</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <hr />




<div class="admin-content">
  <h4>
    Welcome to the Admin Dashboard!
  </h4>


      <ul class="list-group">
        <li class="list-group-item" v-for="event in events" :key="event.event_id">
          <router-link id="events" :to="`/update/${event.event_id}`">{{
          event.title
        }}</router-link>
        <router-link id="update-events" class="event alert-primary" :to="`/update/${event.event_id}`">Update</router-link>
        <router-link id="update-events" class="event alert-primary" @click="() => deleteArticle(article.articleid)">Update</router-link>
        </li>
      </ul>



</div>
    
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Admin",
  data: function () {
    return {
      // loading: false,
      events: [],
    };
  },
  created: function () {
    this.loadEvents();
  },
  methods:  {
    loadEvents() {
      // this.loading = true;
      this.events = [];
    Api.getEvent().then((res) => {
      this.events = res.data;
      // this.loading = false;
    });
    },
  deleteEvent(event_id) {
      Api.deleteEvent(event_id)
        .then(() => {
          this.loadEvents();
        })
        .catch((err) => {
          console.log(err);
       });
    },
  },
};

</script>
<style scoped>
.list-group {
  width: 50%;
  margin-left: 25%; 
}
.event {
  padding: 5px;
  border-radius: 5px;
}
#events {
  text-decoration: none;
  color: black;
}
#events:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}
#update-events {
  text-decoration: none;
  color: black;
  float: right;
}
.admin-event-links {
  display: flex;
  flex-direction: row;
  margin-left: 40%;
  text-align: right;
}
#eventLink {
  margin-left: 15px;
  float: right;
}
#nav-link-route {
  text-decoration: none;
  color: black;
}
#nav-link-route:hover {
  color: rgba(68, 68, 68, 0.685);
  text-decoration: underline;
}

</style>