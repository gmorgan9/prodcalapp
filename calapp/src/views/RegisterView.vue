<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div>
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
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="form-control"
              name="email"
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
          <div class="form-group">
            <label for="dept_id">dept_id</label>
            <input
              v-model="dept_id"
              type="text"
              id="form-control"
              name="dept_id"
            />
            
          </div>

          <br>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Sign Up</span>
            </button>
          </div>
          <p class="bottom-link">Or <router-link :to="`/login`">Login</router-link></p>
        </div>
      </form>


      <select  v-model="selected" id="deptList">
              <option v-for="department in dept" :key="department.dept_id">
                {{department.name}}
            </option>
          </select> 

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password_hash: "",
      dept_id: "",
      loading: false,
      message: "",
      dept: [],
    };
  },
  created: function () {
    this.loadDepts();
  },
  methods: {
    loadDepts() {
      // this.loading = true;
      this.dept = [];
    Api.getDept().then((res) => {
      this.dept = res.data;
      // this.loading = false;
    });
    },
    handleRegister() {
      this.message = "";
      this.loading = true;
      Api.signup(this.username, this.email, this.password_hash, this.dept_id)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
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
  padding: 40px 40px;
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