<template>
  <div>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/admin">Admin</router-link> | 
        <router-link to="/logout">Logout</router-link>
    </nav>
    <br />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Admin",
};
</script>