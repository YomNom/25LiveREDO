<script>
    import { onMount } from "svelte";
    import DisplayEvents from "./DisplayEvents.svelte";
    export let currentEvents = [];
    export let selectedRoomId = '';

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
    let show = false;
    let confirmationMessage = '';
    let confirm = false;

    function confirmAction() {
        handleSubmit();
        show = false;
    }

    function cancelAction() {
        confirm = false;
        show = false;
    }

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
  
    function confirmEvent() {
      console.log(selectedRoomId); // for debugging
      
      const eventStartDateTime = new Date(`${event.date}T${event.startTime}`);
      const eventEndDateTime = new Date(`${event.date}T${event.endTime}`);
      const now = new Date();

      // Format Time
      const [startHours, startMinutes] = event.startTime.split(':');
      const startPeriod = +startHours >= 12 ? 'PM' : 'AM';
      const [endHours, endMinutes] = event.endTime.split(':');
      const endPeriod = +endHours >= 12 ? 'PM' : 'AM';

      // Format Date
      const [year, month, day] = event.date.split('-');
      const formattedDate = `${month}-${day}-${year}`;
      event.date = formattedDate;
      event.startTime = formatTime(event.startTime);  
      event.endTime = formatTime(event.endTime);  

      
      event.location = selectedRoomId;

      if (eventStartDateTime < now) {
        errorMessage = 'Scheduled start time cannot be before the current time.';
      } else if (eventEndDateTime <= eventStartDateTime) {
        errorMessage = 'End time cannot be before or equal to the start time.';
      } else if (startPeriod === 'PM' && endPeriod === 'AM') {
        errorMessage = 'End time cannot be on the next day.';
      } else {
        errorMessage = '';
        show = true;
      }
    }

    function handleSubmit() {
        errorMessage = '';
        
        currentEvents = [...currentEvents, { ...event }]; 
        resetForm();

        console.log(currentEvents);
    }
  
    function formatTime(time) {
      const [hours, minutes] = time.split(':');
      const period = +hours >= 12 ? 'PM' : 'AM';
      const formattedHours = +hours % 12 || 12;
      return `${formattedHours}:${minutes} ${period}`;
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
    <form on:submit|preventDefault={confirmEvent}>
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

  {#if show}
    <div class="popup-overlay">
      <div class="popup">
        <h2>Please confirm event information:</h2>
        <table>
          <tbody>
            <tr>
              <td class="confirm-msg">Event Name</td>
              <td class = "confirm-data">{event.name}</td>
            </tr>
            <tr>
              <td class="confirm-msg">Date</td>
              <td class = "confirm-data">{event.date}</td>
            </tr>
            <tr>
              <td class="confirm-msg">Start Time</td>
              <td class = "confirm-data">{event.startTime}</td>
            </tr>
            <tr>
              <td class="confirm-msg">End Time</td>
              <td class = "confirm-data">{event.endTime}</td>
            </tr>
            <tr>
              <td class="confirm-msg">Location</td>
              <td class = "confirm-data">{event.location}</td>
            </tr>
          </tbody>
        </table>
        <br>
        <button on:click={confirmAction}>Confirm</button>
        <button on:click={cancelAction}>Cancel</button><br>
      </div>
    </div>
  {/if}

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
    table {
      justify-content: center;
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

    .confirm-msg {
      padding: 10px 20px;
      background-color: #777777;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .confirm-data {
      padding: 10px 20px;
      background-color: #e7e7e7;
      color: rgb(0, 0, 0);
      border: none;
      width: 225px;
      border-radius: 5px;
      cursor: pointer;
    }
    button {
      padding: 10px 20px;
      background-color: #d91515;
      color: white;
      border: none;
      border-radius: 5px;
      justify-self: center;
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

    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .popup {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
    height: 340px;
  }
  .popup button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #d91515;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>