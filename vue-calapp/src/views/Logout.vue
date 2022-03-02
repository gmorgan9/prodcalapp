<template>
  <div>Logging you out...</div>
</template>

<script>
import { deleteJwtToken } from "../auth";
export default {
  name: "logout",
  mounted: function () {
    deleteJwtToken();
    this.$router.push({ path: "/" });
  },
};
</script>