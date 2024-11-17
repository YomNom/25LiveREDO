<script>
	import DisplayEvents from "./DisplayEvents.svelte";

    // @ts-nocheck
    import EventForm from "./EventForm.svelte";
    import Location from "./locations.svelte";


	import Popup from "./Popup.svelte";

    let currentEvents = [
      {
        name: 'Sample Event 1',
        date: '2023-10-01',
        startTime: '10:00',
        endTime: '11:00'
      }
    ];
    let  showPopup = false;
    </script>
    
    <main>
      <nav>
        <div class="navbar">
          <img src="/UC-ReadoutLogo.png" alt="UC Readout Logo" class="UClogo" width="100px" height="60px"/>
        </div>
      </nav>
    
      <div class="top-page">
        <EventForm {currentEvents} />
        <DisplayEvents {currentEvents} title="Current Events" />
        <button on:click={() => showPopup = !showPopup}>Show Popup</button>
        <Popup {showPopup} message="This is a popup message!" />
      </div>

       <!-- Bottom Section for Locations -->
  <div class="bottom-page">

    <Location />
    </div>


    </main>
    
    <style>
      main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        font-family: 'Host Grotesk', sans-serif;
        font-size: 1rem;
        padding-top: 60px; /* Adjust for navbar height */
        background-color: #afabab;

      }
      .navbar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #d91515;
      }
      .UClogo {
        margin-left: 20px; /* Adjust the value as needed */
      }
      .top-page {
        display: flex;
        flex-direction: row; /* Stack components horizontally */
        justify-content: center; /* Center components horizontally */
        align-items: flex-start; /* Align components to the top */
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background-color: #afabab;
      }
    </style>