<template>
  <div>
    <h2>Admin page</h2>
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

<div v-if="savingSuccessful" class="alert alert-success alert-dismissible fade show" role="alert">
          Congrats! Your Event was Created!
        </div>
<div class="admin-content">
  <h4>
    Welcome to the Admin Dashboard!
  </h4>
</div>
    
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>