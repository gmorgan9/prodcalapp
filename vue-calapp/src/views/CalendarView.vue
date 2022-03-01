<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <form @submit.prevent="handleSubmit">
        <div class="input-holder">
          <input type="text" placeholder="Event title"/>
        </div>
        <div class="input-holder">
          <date-picker :placeholder="'Start date'"/> 
        </div>
        <div class="input-holder">
          <date-picker :placeholder="'End date'"/> 
        </div>
        <div class="input-holder">
          <textarea placeholder="Event description" rows="4" ></textarea>
        </div>
        <div class="input-holder">
        </div>
        <div class="input-holder">
          <button type="submit">Schedule</button>
        </div>
      </form>
  </div>
  
</template>