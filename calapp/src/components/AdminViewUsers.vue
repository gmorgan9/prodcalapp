<template>
  <div>
    <br>
    <h2>Admin page</h2>
    <b-navbar>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link id="nav-link-route" :to="{ path: '/dashboard' }">Dashboard</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/' }">Home</router-link></b-nav-item>
          | <b-nav-item><router-link id="nav-link-route" :to="{ path: '/logout' }">Logout</router-link></b-nav-item>
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
            <button id="update-users-btn" class="users alert-danger" @click="() => deleteUser(users.user_id)">Delete</button>
            <router-link id="update-users" :to="`/updateusers/${users.user_id}`"><button class="users alert-primary">Update</button></router-link>
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


</style>