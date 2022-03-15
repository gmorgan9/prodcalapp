<template>
  <div>
    <br>
    <h2>Admin page</h2>
    <b-navbar>
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <nav class="ml-auto">
          <router-link class="nav-item" :to="{ path: '/' }">Home</router-link>
          <div v-if="isAdmin"> | <router-link class="nav-item" :to="{ path: '/superadmin' }">Admin</router-link></div>
          <div v-else></div>
          | <router-link class="nav-item" :to="{ path: '/logout' }">Logout</router-link>
          | <router-link class="nav-item" :to="{ path: '/create' }">Create</router-link>
        </nav>
      </b-collapse>
    </b-navbar>
    <br />
    <hr />



<div class="admin-content">
    <h5>Welcome to the Dashboard!</h5>
<div id="right-card" class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">View/Edit Events</h5>
    <p class="card-text">Follow this link to view and edit events within this calendar.</p>
    <router-link id="car-btn" :to="`/adminevents`"><button class="btn btn-primary">View</button></router-link>
  </div>
</div>
</div>
<hr>



    
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
.card {
  display: inline-block;
}
#right-card {
  margin-left: 10px;
}
.card-btn {
  margin-bottom: 5px;
}
.list-group {
  width: 40%;
  margin-left: 30%; 
  
}
.title {
  padding-top: 1%;
  margin-bottom: -5.5%;
  margin-left: -8%;
}
.event {
  padding: 5px;
  border-radius: 5px;
}
#update-events {
  text-decoration: none;
  color: black;
  float: right;
}
#update-events-btn {
  text-decoration: none;
  color: black;
  float: right;
  margin-left: 1.5%;
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