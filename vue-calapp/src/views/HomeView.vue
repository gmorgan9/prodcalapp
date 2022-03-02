<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading articles....</div>
    <ul v-else>
      <li v-for="user in users" :key="user.user_id">
        <router-link :to="`user/${user.user_id}`">{{
          user.user_name
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
      users: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.users().then((res) => {
      this.users = res.data;
      this.loading = false;
    });
  },
};
</script>