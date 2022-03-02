<template>
  <div>
    <div v-if="loading">Loading article....</div>
    <div v-else>
      <h1>{{ cal_events.event_title }}</h1>
      <p>{{ cal_events.event_type }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "event_view",
  data: function () {
    return {
      loading: false,
      article: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getArticleDetail(this.$route.params.id).then((res) => {
      this.article = res.data[0];
      this.loading = false;
    });
  },
};
</script>
© 2022 GitHub, Inc.
Terms
