<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />


      <form name="form" @submit.prevent="handleLogin">


        <!-- Username & Password -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            id="form-control"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="password_hash">Password</label>
          <input
            v-model="password_hash"
            type="password"
            id="form-control"
            name="password_hash"
          />
        </div>


<br>

        <div class="form-group">
          <button class="btn btn-outline-secondary" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <br>
        <p class="bottom-link">Or <router-link :to="`/register`">Sign Up</router-link></p>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import { setJwtToken } from "../auth";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password_hash: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.message = "";
      Api.login(this.username, this.password_hash)
        .then((res) => {
          setJwtToken(res.data[0].token);
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push('/');
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status === 403) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
.card-container.card {
  max-width: 350px !important;
  padding: 30px 30px;
}
.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>