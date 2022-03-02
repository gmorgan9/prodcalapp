<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading articles....</div>
    <ul v-else>
      <li v-for="users in user" :key="users.id">
        {{ users.username }} &nbsp; | &nbsp; {{ users.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Home",
  data: function () {
    return {
      loading: false,
      user: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getUsers().then((res) => {
      this.user = res.data;
      this.loading = false;
    });
  },
};
</script>
