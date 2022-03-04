<template>
  <div>
    <h1>Admin page</h1>
    <b-navbar>
      <b-nav-item><router-link :to="{ path: '/' }">Home</router-link></b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <div v-if="user">
  Logged in
  <pre>{{user_d}}</pre>
</div>
<div v-else>Not logged in</div>




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
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>