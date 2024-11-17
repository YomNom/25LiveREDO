<script>
    // @ts-nocheck
    import EventForm from "./event_form.svelte";
    import DisplayEvents from "./display_events.svelte";
    import Location from "./locations.svelte";



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
        font-family: 'Host Grotesk', sans-serif;
        font-size: 1rem;
        background-color: rgb(241, 239, 239);
        padding-top: 10px;
      }
      .navbar {
        width: 100%;
        height: 60px;        
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

      .bottom-page {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
    </style>