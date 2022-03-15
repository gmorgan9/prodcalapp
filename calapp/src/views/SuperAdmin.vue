<template>
  <div>
    <br>
    <h2>Admin page</h2>

      <nav>
         <router-link class="link" :to="{ path: '/dashboard' }">Dashboard &nbsp;</router-link>
         <router-link class="link" :to="{ path: '/logout' }">&nbsp; Logout</router-link>
        </nav>
    <hr />


<div class="log-header">
    <h5>Welcome to the Dashboard!</h5>
  </div>

  <div class="message-content">
    <h5>View/Edit Users</h5>
    <p class="card-text">Follow this link to view and edit users within this calendar.</p>
    <router-link id="car-btn" :to="`/adminusers`"><button class="btn btn-outline-secondary">View</button></router-link>
  </div>




    
</div>
</template>

<script>
import Api from "../api";
export default {
  name: "Admin",
  data: function () {
    return {
      isAdmin: true,
      // loading: false,
      events: [],
    };
  },
  created: function () {
    this.loadEvents();
    // ONLY ALLOWS isADMIN
    Api.getUsersDetail(Api.getUserID()).then((res) => {
      this.isAdmin = (res.data[0].isadmin == 1);
      if(this.isAdmin == false) {
        this.$router.push("/dashboard");
      }
    });
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
.link {
  text-decoration: none;
}

</style>