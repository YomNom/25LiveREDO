<script>
    import { onMount } from "svelte";
    import DisplayEvents from "./DisplayEvents.svelte";
    export let currentEvents = [];
  
    let event = {
      name: '',
      date: '',
      startTime: '',
      endTime: '', 
      location: ''
    };
  
    let currentDate = '';
    let currentTime = '';
    let errorMessage = '';
  
    onMount(() => {
      const now = new Date();
      currentDate = now.toISOString().split('T')[0];
      currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
  
      // Set default start time to the next hour
      const startTime = new Date(now);
      startTime.setHours(startTime.getHours() + 1);
      event.startTime = startTime.toTimeString().split(' ')[0].slice(0, 5);
  
      // Set default end time to one hour after the start time
      const endTime = new Date(startTime);
      endTime.setHours(endTime.getHours() + 1);
      event.endTime = endTime.toTimeString().split(' ')[0].slice(0, 5);
    });
  
    function handleSubmit() {
      const eventStartDateTime = new Date(`${event.date}T${event.startTime}`);
      const eventEndDateTime = new Date(`${event.date}T${event.endTime}`);
      const now = new Date();
  
      if (eventStartDateTime < now) {
        errorMessage = 'Scheduled start time cannot be before the current time.';
      } else if (eventEndDateTime <= eventStartDateTime) {
        errorMessage = 'End time cannot be before or equal to the start time.';
      } else {
        errorMessage = '';
        currentEvents = [...currentEvents, { ...event }]; // Update the currentEvents array reactively
        console.log(currentEvents);
        resetForm();
      }
    }
  
    function resetForm() {
      event.name = '';
      event.date = '';
      const now = new Date();
      const startTime = new Date(now);
      startTime.setHours(startTime.getHours() + 1);
      event.startTime = startTime.toTimeString().split(' ')[0].slice(0, 5);
  
      const endTime = new Date(startTime);
      endTime.setHours(endTime.getHours() + 1);
      event.endTime = endTime.toTimeString().split(' ')[0].slice(0, 5);
    }
  </script>
  
  <div class="rounded-rectangle">
    <form on:submit|preventDefault={handleSubmit}>
      <h2>Event Scheduling Form</h2>
      <div>
        <label for="eventName">Event Name (Optional)</label>
        <input type="text" id="eventName" bind:value={event.name} />
      </div>
      <div>
        <label for="eventDate">Date</label>
        <input type="date" id="eventDate" bind:value={event.date} required />
      </div>
      <div class="time-container">
        <div>
          <label for="startTime">Start Time:</label>
          <input type="time" id="startTime" bind:value={event.startTime} required />
        </div>
        <div>
          <label for="endTime">End Time:</label>
          <input type="time" id="endTime" bind:value={event.endTime} required />
        </div>
      </div>
      <button type="submit">Submit</button>
      {#if errorMessage}
        <p class="error"><i class="fas fa-exclamation-circle"></i> {errorMessage}</p>
      {/if}
    </form>
  </div>

  <DisplayEvents {currentEvents} title="Current Events" />

  <style>
    .rounded-rectangle {
      background-color: #fff;
      border-radius: 15px;
      padding: 20px; /* Padding inside the rectangle */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
    }
    h2 {
      margin-top: 0; 
    }
    form div {
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
    .time-container {
      display: flex;
      justify-content: space-between;
    }
    .time-container > div {
      flex: 1;
      margin-right: 10px;
    }
    .time-container > div:last-child {
      margin-right: 0;
    }
    button {
      padding: 10px 20px;
      background-color: #d91515;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .error {
      color: red;
      margin-top: 10px;
      display: flex;
      align-items: center;
    }
    .error i {
      margin-right: 5px;
    }
  </style>