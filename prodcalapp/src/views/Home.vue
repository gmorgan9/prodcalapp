<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
-->

<template>
  <div class="home">
    <v-card class="mx-auto" max-width="900" v-if="fetched">
      
      <!-- [√]TODO: Add your NewTaskForm component -->
      <NewTaskForm v-bind:form="form" v-bind:createTask="createTask"></NewTaskForm>
      <!-- Make sure to pass in any necessary props -->

      <v-divider></v-divider>
      <v-list subheader two-line flat>
        <v-subheader>
          {{user.UserName}}
          <!-- [√]TODO: use the `user` prop to display the user's username here -->'s Tasks:

        </v-subheader>

        <!-- [√]TODO: Add your TaskList component -->
        <!-- Make sure to pass in any necessary props -->
        <TaskList v-bind:tasks="tasks" v-bind:updateTask="updateTask" v-bind:deleteTask="deleteTask"></TaskList>

      </v-list>
    </v-card>
  </div>
</template>

<script>
import { getCurrentDate, formatDate } from '@/util'
// [√]TODO: Import the components you want to use from their files
import NewTaskForm from '@/components/NewTaskForm.vue'
import TaskList from '@/components/TaskList.vue'
export default {
  name: 'Home',
  components: {
    // [√]TODO: Use the Vue Documentation to find out how to use this property
    NewTaskForm,
    TaskList
  },
  props: {
    // [√]TODO: Add the user object as a prop that's passed in from the App.vue component
    user: {
      Type: Object,
      default: {
        Type: Object,
        UserName: ""
      }
    }
  },
  data: () => ({
    fetched: false, // This keeps us from getting an error when the page loads, but there's no data
    tasks: [], // This will hold the list of tasks you get from your API
    form: {
      // [√]TODO: Add 2 properties to this form data object to track the Text and the Date
      // HINT: Capitalize the "Text" and "Date" properties to make it easier to pass the data to your API
      // HINT: You can use the `getCurrentDate()` method to get today's date in the proper format for the datepicker
      Text: "",
      Date: getCurrentDate()
    },
  }),
  mounted() {
    // [√]TODO: Call the method that gets the tasks from your API
    this.readTasks()
  },
  methods: {
    createTask(form) {
      // TODO: Use fetch() to send a POST request to your API that includes the data from this.form
      fetch(
       `${process.env.VUE_APP_API_ORIGIN}/api/v1/tasks`, 
       {
         method: 'POST',
         credentials: 'include',
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           Text: this.form.Text,
           Date: this.form.Date
         })
       }
      ).then(response =>{
        if(response.ok) {
          this.readTasks()
        }
      })
      this.form.Text = "",
      this.form.Date = getCurrentDate()
      // TODO: Remember to get the updated task list when it's done
      // TODO: Remember to reset the values in this.form to their initial values when it's done
    },
    readTasks() {
      // TODO: Use fetch() to send a GET request to your API and update this.fetched and this.tasks with the data that's returned
      fetch(
       `${process.env.VUE_APP_API_ORIGIN}/api/v1/tasks`, 
       {
         method: 'GET',
         credentials: 'include'
       }
      ).then(async response => {
        if(response.ok) {
          this.tasks = await response.json()
          this.fetched = true
        }
      })
    },
    updateTask(task) {
      // TODO: Use fetch() to send a PUT request to your API to update an task to be Done/not Done.
      if(task.Done == true) {
          task.Done = false
        }else {
          task.Done = true
        }
      fetch(
       `${process.env.VUE_APP_API_ORIGIN}/api/v1/tasks/${task._id}`, 
       {
         method: 'PUT',
         credentials: 'include',
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           Done: task.Done
         })
       }
      ).then(response => {
        if(response.ok) {
          this.readTasks()
        }
      })
    },
    deleteTask(task) {
      fetch(
        `${process.env.VUE_APP_API_ORIGIN}/api/v1/tasks/${task._id}`,
        {
          method: `DELETE`,
          credentials: `include`,
        }
      ).then(response => {
        if (response.ok) {
          this.readTasks()
        }
      })
    }
  }
}
</script>

<style scoped>
.form {
  padding: 0 1rem;
}
</style>