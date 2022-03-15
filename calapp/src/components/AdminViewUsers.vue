<template>
  <div>
    <!-- <br>
    <h2>Admin page</h2>

    <nav>
         <router-link class="link" :to="{ path: '/dashboard' }">Dashboard &nbsp;</router-link>
         <router-link class="link" :to="{ path: '/logout' }">&nbsp; Logout</router-link>
        </nav>
    <hr /> -->



  <div class="log-header">
    <h5>Users List</h5>
    </div>
    <div class="message-content">
      <router-link id="car-btn" :to="`/profile`"><button class="btn btn-outline-secondary">Back</button></router-link>
      <br>
        <ul class="list-group">
          <li class="list-group-item" v-for="users in user" :key="users.user_id">
            <div class="title">{{ users.username }}</div>
            <routerlink id="delete-events" :to="{name: '/adminusers'}" tag="li" exact v-on:click.native="deleteUser(users.user_id)">Delete</routerlink>
            <router-link id="update-events" :to="`/updateusers/${users.user_id}`">Update</router-link>
          </li>
        </ul>
  </div>
    
</div>
</template>

<script>
import Api from "../api";
export default {
  name: "AdminViewUsers",
  data: function () {
    return {
      // loading: false,
      user: [],
      isAdmin: true,
    };
  },
  created: function () {
    this.loadUsers();
    Api.getUsersDetail(Api.getUserID()).then((res) => {
      this.isAdmin = (res.data[0].isadmin == 1);
      if(this.isAdmin == false) {
        this.$router.push("/");
      }
    });
  },
  methods:  {
    loadUsers() {
      // this.loading = true;
      this.user = [];
    Api.getUsers().then((res) => {
      this.user = res.data;
      // this.loading = false;
    });
    },
  deleteUser(user_id) {
      Api.deleteUser(user_id)
        .then(() => {
          this.loadUsers();
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
.title {
  padding-top: 1%;
  margin-bottom: -2.8%;
  margin-left: -8%;
}
.event {
  padding: 5px;
  border-radius: 8.5px;
}
#update-events {
  text-decoration: none;
  color: blue;
  float: right;
  cursor: pointer;
  margin-top: -1.5%
}
#delete-events {
  text-decoration: none;
  color: red;
  float: right;
  cursor: pointer; 
  margin-left: 8px;
  margin-top: -1.5%
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