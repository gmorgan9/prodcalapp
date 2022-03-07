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
    <h5>Users</h5>
        <ul class="list-group">
          <li class="list-group-item" v-for="users in user" :key="users.user_id">
            <div class="title">{{ users.username }}</div>
            <button id="update-events-btn" class="event alert-danger" @click="() => deleteEvent(users.user_id)">Delete</button>
            <router-link id="update-events" :to="`/update/${users.user_id}`"><button class="event alert-primary">Update</button></router-link>
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
      users: [],
    };
  },
  created: function () {
    this.loadUsers();
  },
  methods:  {
    loadUsers() {
      // this.loading = true;
      this.users = [];
    Api.getUsers().then((res) => {
      this.Users = res.data;
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