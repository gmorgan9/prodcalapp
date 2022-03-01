<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <form >
        <div class="input-holder">
          <input type="text" placeholder="Event title" v-model="event.title"/>
        </div>
        <div class="input-holder">
          <date-picker :placeholder="'Start date'" v-model="event.start" /> 
        </div>
        <div class="input-holder">
          <date-picker :placeholder="'End date'" v-model="event.end"/> 
        </div>
        <div class="input-holder">
          <textarea placeholder="Event description" rows="4" v-model="event.data.description" ></textarea>
        </div>
        <div class="input-holder">
        </div>
        <div class="input-holder">
          <button type="submit">Schedule</button>
        </div>
      </form>
  </div>
</template>
