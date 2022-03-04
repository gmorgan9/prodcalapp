<template>
  <div>
    <h1>Admin page</h1>
    <b-navbar>
      <b-nav-item><router-link :to="{ path: '/' }">Home</router-link></b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          | <b-nav-item><router-link :to="{ path: '/logout' }">Logout</router-link></b-nav-item>
          | <b-nav-item><router-link :to="{ path: '/create' }">Create</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <hr />

    <p>userid: {{ users.username }}</p>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { getUserIdFromToken } from "../auth";
import Api from "../api";
export default {
  name: "Admin",
  data: function () {
    return {
      loading: false,
      users: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getUsers().then((res) => {
      this.users = res.data;
      this.loading = false;
    });
  },
};
</script>