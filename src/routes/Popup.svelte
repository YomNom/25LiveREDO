<!-- FILE: Popup.svelte -->
<script>
	import CalendarSchedule from "./CalendarSchedule.svelte";
	import Roommap from "./Roommap.svelte";
import Table from "./Table.svelte";

    export let showPopup = false;
    export let message = "This is a popup!";
    let tableData = [

      { key:"building" ,name: 'Building', value: '60 West Charlton' },
      { key:"roomName" ,name: 'Room Name', value: 'Classroom' },
      { key:"capacity" ,name: 'Max Capacity', value: '40' },
      { key:"resources" ,name: 'Resoucres', value: ["Carpet","Chairs","White Board","TV","Wi-Fi"] },
      { key:"hours" ,name: 'Hours', value: 'Value 3' }


    ];
    let showDropdownCalendar = true;
    let showDropdownMap= false;
    
</script>
  
{#if showPopup}
  <div class="popup-overlay">
      <div class="popup">
          <div class="popup-header">
            <h1>60 West Charlton - Room 200</h1>
          </div>
          <div class="popup-content">
            <!-- table of information -->
            <Table {tableData} />

            <!-- calendar show -->
           <div class="calendar-dropdown">
                <button class="dropdown-button" on:click={() => showDropdownCalendar = !showDropdownCalendar}>
                {showDropdownCalendar ? 'Hide Availabities' : 'Show Availabilities on Calendar'}
                </button>
                
                {#if showDropdownCalendar}
                <div class="dropdown-content">
                    <CalendarSchedule /> 
                </div>
                {/if}
           </div>

            <!-- map -->
            <div class="map-dropdown">
                <button class="dropdown-button" on:click={() => showDropdownMap = !showDropdownMap}>
                    {showDropdownMap ? 'Hide Availabities' : 'Show Availabilities on Calendar'}
                </button>
                
                {#if showDropdownMap}
                    <div class="dropdown-content">
                        <Roommap /> 
                    </div>
                {/if}
            </div>
            <button on:click={() => showPopup = !showPopup}>Close</button>
          </div>

          
      </div>
  </div>
{/if}


  
<style>
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
    z-index: 10;
  }
  .popup {
    height: calc(100vh - 200px);
    width: 50%;
    background: white;
    padding: 20px 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow-Y: auto;

  }
  .popup-header{
    display: flex;
    padding: 0 20px;
    border-bottom: 1px black solid;
  }

  .popup-content{
      padding: 5px 20px;
  }

  .dropdown-content{
    margin: 15px;
    justify-content: center;
  }
  
  .calendar-dropdown, .map-dropdown{
    justify-content: center;
    margin-top: 10px;
  }

  .dropdown-button{
    background-color: #f1f1f1;
    color: black;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 100%;
    border: #b9b9b9 solid 1px;
    border-radius: 10px;
  }
</style>
