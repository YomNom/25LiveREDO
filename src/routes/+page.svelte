<script>
    // @ts-nocheck
    
    import EventForm from "./EventForm.svelte";
    import DisplayEvents from "./DisplayEvents.svelte";
	  import Popup from "./Popup.svelte";
    
    let currentEvents = [
      {
        name: 'Sample Event 1',
        date: '2023-10-01',
        startTime: '10:00',
        endTime: '11:00'
      },
      {
        name: 'Sample Event 2',
        date: '2023-10-02',
        startTime: '12:00',
        endTime: '13:00'
      },
      {
        name: 'Sample Event 3',
        date: '2023-10-03',
        startTime: '14:00',
        endTime: '15:00'
      },
      {
        name: 'Sample Event 4',
        date: '2023-10-04',
        startTime: '16:00',
        endTime: '17:00'
      },
      {
        name: 'Sample Event 5',
        date: '2023-10-05',
        startTime: '18:00',
        endTime: '19:00'
      },
      {
        name: 'Sample Event 6',
        date: '2023-10-06',
        startTime: '20:00',
        endTime: '21:00'
      },
      {
        name: 'Sample Event 7',
        date: '2023-10-07',
        startTime: '22:00',
        endTime: '23:00'
      },
      {
        name: 'Sample Event 8',
        date: '2023-10-08',
        startTime: '09:00',
        endTime: '10:00'
      },
      {
        name: 'Sample Event 9',
        date: '2023-10-09',
        startTime: '11:00',
        endTime: '12:00'
      },
      {
        name: 'Sample Event 10',
        date: '2023-10-10',
        startTime: '13:00',
        endTime: '14:00'
      }
    ];
    let  showPopup = false;
    </script>
    
    <main>
      <nav>
        <div class="navbar">
          <img src="/UC-ReadoutLogo.png" alt="UC Readout Logo" class="UClogo" width="125px" height="50px"/>
        </div>
      </nav>
    
      <div class="top-page">
        <EventForm {currentEvents} />
        <DisplayEvents {currentEvents} title="Current Events" />
        <button on:click={() => showPopup = !showPopup}>Show Popup</button>
        <Popup {showPopup} message="This is a popup message!" />
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
      }
    </style>