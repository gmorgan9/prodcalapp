<template>
<div>
<div class="log-header">

</div>
<div class="message-content">




			<div class="error success" >
				<h3>
					
				</h3>
			</div>
		
		<!-- logged in user information -->
		<div class="profile_info">
			<img src="admin.png">
		
			<img src="profile.png">
		
			<div>
				
					<strong></strong>

					<small>
						<i  class="profile-user"></i> 
						<br>
      						<a href="/logout"><button class="log-btn">Logout</button></a>
							<a href="/"><button class="log-btn">Home</button></a>
							<a href="/"><button class="log-btn">Add User</button></a>
							<a href="/"><button class="log-btn">Reset Password</button></a>
						
							<a href="/logout"><button class="log-btn">Logout</button></a>
							<a href="/"><button class="log-btn">Home</button></a>
							<a href="/"><button class="log-btn">Reset Password</button></a>
						
					</small>
				
			</div>




</div>




	

</div>
</template>

<script>
import Api from "../api";
export default {
  name: "Admin",
  data: function () {
    return {
      // loading: false,
      isAdmin: true,
      events: [],
      users: [],
    };
  },
  created: function () {
Api.getUsersDetail(Api.getUserID()).then((res) => {
      this.isAdmin = (res.data[0].isadmin == 1);
      if(this.isAdmin == false) {
        this.$router.push("/dashboard");
      }
    });

    this.loadEvents();
  },
  methods:  {
    loadEvents() {
      // this.loading = true;
      this.events = [];
    Api.getEvent().then((res) => {
      this.events = res.data;
      // this.loading = false;
    });
    },
  deleteEvent(event_id) {
      Api.deleteEvent(event_id)
        .then(() => {
          this.loadEvents();
        })
        .catch((err) => {
          console.log(err);
       });
    },
  },
};

</script>
<style scoped>
.link {
  text-decoration: none;
}

</style>