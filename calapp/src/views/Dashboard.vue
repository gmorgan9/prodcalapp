<template>
  <div>
    <br>
    <h2>Dashboard</h2>
    <b-navbar>
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <nav>
          <router-link :to="{ path: '/' }">Home | </router-link>
          <router-link :to="{ path: '/logout' }">Logout | </router-link>
          <router-link :to="{ path: '/create' }">Create</router-link>
          <router-link v-if="isAdmin" :to="{ path: '/superadmin' }"> | Admin</router-link>
        </nav>
      </b-collapse>
    </b-navbar>
    <hr />



  <div class="log-header">
    <h5>Welcome to the Dashboard!</h5>
  </div>

  <div class="message-content">
    <h5>View/Edit Events</h5>
    <p class="card-text">Follow this link to view and edit events within this calendar.</p>
    <router-link id="car-btn" :to="`/adminevents`"><button class="btn btn-outline-secondary">View</button></router-link>
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
      isAdmin: true,
      events: [],
      users: [],
    };
  },
  created: function () {
Api.getUsersDetail(Api.getUserID()).then((res) => {
      this.isAdmin = (res.data[0].isadmin == 1);
      if(this.isAdmin == false) {
        this.$router.push("/dashboard");
      }
    });

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
router-link {
  text-decoration: none;
}

</style>