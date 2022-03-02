<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading articles....</div>
    <ul v-else>
      <li v-for="users in users" :key="users.user_id">
        <router-link :to="`users/${users.user_id}`">{{
          users.user_name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "home",
  data: function () {
    return {
      users: [user_name],
    };
  },
  created: function () {
    this.loading = true;
    Api.getUsers().then((res) => {
      this.getUsers = res.data;
      this.loading = false;
    });
  },
};
</script>