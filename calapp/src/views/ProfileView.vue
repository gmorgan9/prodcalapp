<template>
<div>
<div class="log-header">
Profile
</div>
<div class="message-content">
		
		<!-- logged in user information -->
		<div class="profile_info">

			<img src="../assets/admin.png">
            <br>
            <h3>{{ uname }}</h3>
		
			<div>
				
					<strong></strong>

					<small> 
						<br>
                        <div v-if="isAdmin">
      						<a href="/logout"><button class="log-btn">Logout</button></a>
							<a href="/"><button class="log-btn">Home</button></a>
							<a href="/"><button class="log-btn">Add User</button></a>
							<a href="/"><button class="log-btn">Reset Password</button></a>
                            </div>
						<div v-else>
							<a href="/logout"><button class="log-btn">Logout</button></a>
							<a href="/"><button class="log-btn">Home</button></a>
							<a href="/"><button class="log-btn">Reset Password</button></a>
						</div>
					</small>
			</div>
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
      uname: Api.getUserName(),
    };
  },
  created: function () {
Api.getUsersDetail(Api.getUserID()).then((res) => {
      this.isAdmin = (res.data[0].isadmin == 1);
      if(this.isAdmin == false) {
        this.$router.push("/profile");
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
.log-btn {
    padding: 10px;
    font-size: 15px;
    color: white;
    background-color: #002E5D;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}
.profile_info img {
	display: inline-block; 
	width: 50px; 
	height: 50px; 
	margin: 5px;
	float: left;
}
.profile_info div {
	display: inline-block; 
	margin: 5px;
}
.profile_info:after {
	content: "";
	display: block;
	clear: both;
}

</style>