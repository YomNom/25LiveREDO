<script>
  export let currentEvents = [];
  export let title = '';

  let showPopup = false;
  let eventToRemove = null;

  function confirmRemoveEvent(index) {
    eventToRemove = index;
    showPopup = true;
  }

  function removeEvent() {
    if (eventToRemove !== null) {
      currentEvents = currentEvents.filter((_, i) => i !== eventToRemove);
      eventToRemove = null;
      showPopup = false;
    }
  }

  function cancelRemoveEvent() {
    eventToRemove = null;
    showPopup = false;
  }
</script>

<div class="events-list-container">
  <div class="events-list">
    <h2>{title}</h2>
    <ul>
      {#if currentEvents.length === 0}
        <li>No events scheduled</li>
      {:else}
        {#each currentEvents as event, index}
          <li class="event-item">
            <div class="event-content">
              <strong>{event.location}</strong> 
              <br>{event.name} From {event.startTime} to {event.endTime}
            </div>
            <button class="cancel-button" on:click={() => confirmRemoveEvent(index)}>Cancel</button>
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</div>

{#if showPopup}
  <div class="popup-overlay">
    <div class="popup">
      <p>Are you sure you want to cancel this event?</p>
      <button on:click={removeEvent}>Yes</button>
      <button on:click={cancelRemoveEvent}>No</button>
    </div>
  </div>
{/if}

<style>
  .events-list-container {
    padding: 20px;
  }
  .events-list {
    background-color: #fff;
    padding: 20px; /* Padding inside the rectangle */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 450px;
    height: 275px; 
    overflow-y: auto; /* Enable vertical scrolling */
  }
  .events-list ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .events-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .event-item {
    background-color: #d60202b7;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    color: #fff; /* Change text color to white */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .event-content {
    flex-grow: 1;
  }
  .cancel-button {
    background-color: #a30a0a;
    border-radius: 10px;
    padding: 8px;
    border: none;
    color: #fff9f9;
    font-size: .8rem;
    cursor: pointer;
    margin-left: 10px;
  }
  h2 {
    margin-top: 0;
    color: #333; /* Change text color of the title */
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