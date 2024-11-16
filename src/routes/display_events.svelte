<script>
    export let currentEvents = [];
    export let title = '';
  </script>
  
  <div class="events-list-container">
    <div class="events-list">
      <h2>{title}</h2>
      <ul>
        {#if currentEvents.length === 0}
          <li>No events scheduled</li>
        {:else}
          {#each currentEvents as event}
            <li>
              <strong>{event.name}</strong> - {event.date} from {event.startTime} to {event.endTime}
            </li>
          {/each}
        {/if}
      </ul>
      
    </div>
  </div>
  
  <style>
    .events-list-container {
      padding: 20px;
    }
    .events-list {
      background-color: #fff;
      padding: 20px; /* Padding inside the rectangle */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 275px; /* Fixed height */
      overflow-y: auto; /* Enable vertical scrolling */
    }
    .events-list ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .events-list li {
      margin-bottom: 10px;
    }
    h2 {
      margin-top: 0;
    }
  </style>