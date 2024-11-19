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
            <div class="menu-container">
              
              <img src="/home-icon.png" alt="Home Logo" class="home-logo" width="30px" height="30px"/>
              <h4>25Live</h4>
              <div class = "welcome">
                <h4>Welcome Student!</h4>
              </div>
              <img src="/menu-icon.png" alt="Menu Logo" class="menu-logo" width="px" height="35px"/>
            </div>
        </div>
      </nav>
      
      <div class="body-container">
        <div class="top-page">
          <EventForm {currentEvents} />
        </div>
        <div class="table-container">
          <Locations />
        </div>
      </div>
    </main>
    
    <style>
      main {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: 'Host Grotesk', sans-serif;
        font-size: 1rem;
        margin-top: 60px; /* Adjust for navbar height */
        background-color: #F8F5F2
        ;
        padding-top: 10px;
      }
      .navbar {
        width: 100%;
        height: 60px;
        position: fixed;
        display: flex;
        justify-content: space-between;
        top: 0;
        left: 0;
        background-color: #d91515;
      }

      .menu-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 200px;
        color: #ffffff;
        background-color: #a30a0a;
        border-radius: 10px;
        padding: 5px;
        margin-top: 5px;
        height: 40px;
        margin-right: 10px;
      }
      .UClogo {
        margin-left: 20px; 
      }

      .menu-logo {
        margin-right: 20px;
      }

      .welcome {
        padding: 30px;
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