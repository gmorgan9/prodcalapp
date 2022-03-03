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
          <div>
    <b-form-group label="Select calendar interactive state" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="state"
        :aria-describedby="ariaDescribedby"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio value="disabled">Disabled</b-form-radio>
        <b-form-radio value="readonly">Readonly</b-form-radio>
        <b-form-radio value="normal">Normal</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-calendar
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    ></b-calendar>
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