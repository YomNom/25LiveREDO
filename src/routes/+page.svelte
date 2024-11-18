<script>
    // @ts-nocheck
    
    import EventForm from "./Components/EventForm.svelte";
    import DisplayEvents from "./Components/DisplayEvents.svelte";
	  import Popup from "./Components/Popup.svelte";
	  import Locations from "./Components/Locations.svelte";
    
    let currentEvents = [
      {
        name: 'Sample Event',
        date: '2023-10-01',
        startTime: '10:00',
        endTime: '11:00',
        location: 'Sample Location'
      }
    ];
    let  showPopup = false;
    </script>
    
    <main>
      <nav>
        <div class="navbar">
          <img src="/UC-ReadoutLogo.png" alt="UC Readout Logo" class="UClogo" width="105px" height="60px"/>
        </div>
      </nav>
      
      <div class="body-container">
        <div class="top-page">
          <EventForm {currentEvents} />
        </div>
        <div class="table-container">
          <Locations />
        </div>
        <button >Show Popup</button>
      </div>
    </main>
    
    <style>
      main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100vh - 70px); /* Adjust for navbar height */
        font-family: 'Host Grotesk', sans-serif;
        font-size: 1rem;
        margin-top: 60px; /* Adjust for navbar height */
        background-color: #afabab;
        padding-top: 10px;
      }
      .navbar {
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #d91515;
      }
      .UClogo {
        margin-left: 20px; /* Adjust the value as needed */
      }
      .body-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Align components to the top */
        align-items: center; /* Center components horizontally */
        width: 100%;
        padding-left: 100px;
        padding-right: 100px;
        box-sizing: border-box;
      }

      .top-page {
        display: flex;
        flex-direction: row; /* Stack components horizontally */
        justify-content: center; /* Center components horizontally */
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }
      .table-container {
        display: flex;
        flex-direction: row; /* Stack components horizontally */
        justify-content: center; /* Center components horizontally */
        align-items: flex-start; /* Align components to the top */
        width: 100%;
        min-height: 500px;
        padding: 10px;
        box-sizing: border-box;
      }
    </style>