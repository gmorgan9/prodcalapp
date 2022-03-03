<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <!-- <div v-if="loading">Loading articles....</div> -->
    <!-- <ul v-else> -->
      <form action="">
          <input v-model="title" placeholder="event title...">
          <input v-model="type" placeholder="event type...">
          <input v-model="type" placeholder="event type...">
          <div class="date">
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            <p>Value: '{{ value }}'</p>
          </div>
      </form>



    <!-- </ul> -->
  </div>
</template>

<script>
import Api from "../api";
export default {
    data() {
      return {
        value: ''
      }
    }
  }
//   created: function () {
//     // this.loading = true;
//     Api.getEvent().then((res) => {
//       this.events = res.data;
//       // this.loading = false;
//     });
//   },
// };
</script>