<template>
  <div>
        <br>
        <h2>Update User</h2>
    <div v-if="loading">Loading user...</div>
    <div v-else>
        <hr>
      <form name="form" @submit.prevent="handleSave">
        <div>
          <div class="form-group">
            <label for="id">User Id</label>
            <input
              v-model="users.user_id"
              type="text"
              class="form-control"
              name="id"
              readonly
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="users.email"
              type="email"
              class="form-control"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="users.username"
              type="text"
              class="form-control"
              name="username"
            />
          </div>
          <div class="form-group">
            <label for="password_hash">password</label>
            <input
              v-model="users.password_hash"
              type="password"
              class="form-control"
              name="password_hash"
            />
          </div>
          <div class="form-group">
            <label for="isadmin">Admin</label>
            <select
              v-model="users.isadmin"
              type="radio"
              class="form-control"
              name="isadmin"
              id="one"
              calue="1"
            >
            <option value="1">Yes</option>
            <option value="0">No</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dept_id">Department Id</label>
            <input
              v-model="users.dept_id"
              type="number"
              class="form-control"
              name="dept_id"
              readonly
            />
          </div>

          <div class="form-group">
            <button class="btn btn-outline-secondary" :disabled="saving">
              <span
                v-show="saving"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Save</span>
            </button>
            <router-link :to="`/adminusers`"><button class="btn btn-outline-secondary" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                <span>Back</span>
            </button></router-link>
          </div>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "AdminUpdateUsers",
  data: function () {
    return {
      loading: false,
      saving: false,
      users: null,
    };
  },
  methods: {
    loadUsersDetail() {
      this.loading = true;
      Api.getUsersDetail(this.$route.params.user_id).then((res) => {
        this.users = res.data[0];
        this.loading = false;
      });
    },
    handleSave() {
      this.saving = true;
      Api.updateUser(this.users)
        .then(() => {
          this.saving = false;
          this.$router.push("/adminusers");
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
  created: function () {
    this.loadUsersDetail();
  },
};
</script>
<style scoped>
.form-control {
    width: 50%;
    margin-left: 25%;
}
</style>