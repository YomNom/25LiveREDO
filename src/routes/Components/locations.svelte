

<script lang="ts">
    import Popup from "./Popup.svelte";

    type Location = {
      room_id: string;
      name: string;
      location: string;
      category: string;
      capacity: number;
      resources: string[];
    };

    let showPopup = false;
  
    let locations: Location[] = [
      {room_id: "60WCHARL220", name: "60 West Charlton 220", location: "60 West Charlton", category: "Classroom", capacity: 74, resources: ["Classroom Technology", "Echo 360 Equipment"] }, 
      {room_id: "60WCHARL140", name: "60 West Charlton 140", location: "60 West Charlton", category: "Classroom", capacity: 34, resources: ["Classroom Technology"] },
      {room_id: "TEACHERS 340", name: "Teachers College 340", location: "Teachers College", category: "Studio", capacity: 15, resources: ["Easel", "Canvas Supplies"] },
      {room_id: "ARTSCI 255", name: "Arts & Sciences Hall 255", location: "Arts & Sciences Hall", category: "Meeting Room", capacity: 12, resources: ["TV", "Wi-Fi"] },
      {room_id: "ARTSCI 27", name: "Arts & Sciences Hall 027", location: "Arts & Sciences Hall", category: "Meeting Room", capacity: 5, resources: ["Piano", "Soundproof Walls"] },
      {room_id: "TEACHERS 340", name: "Teachers College 340", location: "Teachers College", category: "Study Room", capacity: 10, resources: ["Wi-Fi", "Power Outlets"] },
      {room_id: "BAFLORY 145", name: "BA Flory Center 145", location: "BA Flory Center", category: "Lab", capacity: 20, resources: ["Chemicals", "Lab Equipment", "Projector"] },
      {room_id: "WOLFSON 4300", name: "Wolfson Center 4300", location: "Wolfson Center", category: "Quiet Study", capacity: 10, resources: ["Wi-Fi", "Power Outlets"] },
      {room_id: "ZIMMER 414", name: "Zimmer Hall 414", location: "Zimmer Hall", category: "Study Room", capacity: 8, resources: ["White Board", "TV"] },
      {room_id: "MANTEI 408", name: "Mantei Center 408", location: "Mantei Center", category: "Conference Room", capacity: 38, resources: ["Projector", "Whiteboard", "Teleconference Equipment"]}, 
      {room_id: "LANGSAM 502", name: "Langsam Library 502", location: "Langsam Library", category: "Study Room",capacity: 6, resources: []}, 
      {room_id: "LANGSAM 519", name: "Langsam Library 519", location: "Langsam Library",  category: "Study Room", capacity: 2, resources: []},
      {room_id: "LANGSAM 413", name: "Langsam Library 413" , location: "Langsam Library", category: "Audio Recording Room", capacity: 1, resources: ["Audio Recording Equipment"]},
      {room_id: "LINDHALL 0027", name: "Lindhall 0027",  location: "Carl H. Lindner Hall", category: "Study Room",capacity: 8, resources: ["TV", "Whiteboard"]},
      {room_id: "LINDHALL 0040", name: "Lindhall 0040", location: "Carl H. Lindner Hall", category: "Classroom", capacity: 42, resources: ["Echo 360 Equipment", "Projector"]},
      {room_id: "BALDWIN 548", name: "Baldwin Hall 548",  location: "Baldwin Hall", category: "Computer Instrument Lab", capacity: 24, resources: ["Classroom Technology"]}
    ];
    let currentPage = 1;
  let itemsPerPage = 7;
  let totalPages = Math.ceil(locations.length / itemsPerPage);

  $: paginatedLocations = locations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  let isPopupVisible = false;
  let selectedLocation: Location | null = null;

  function openPopup(location: Location) {
    // selectedLocation = location;
    // isPopupVisible = true;
    showPopup = true;
  }

  function closePopup() {
    isPopupVisible = false;
    selectedLocation = null;
    showPopup = false;
  }

  function handleConfirm() {
  if (selectedLocation) {
    // Update the status of the selected location
    selectedLocation.status = "Unavailable";

    // Ensure reactivity by explicitly reassigning the locations array
    locations = [...locations];
  }
  closePopup();
}


  function changePage(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
      currentPage = newPage;
    }
  }
</script>

<div class="locations-container">
  <h2>Your Locations</h2>
  <p class="location-count">{locations.length} available locations</p>

  <div class="locations-table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Room ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Categories</th>
          <th>Max Capacity</th>
          <th>Resources</th>
          <th>Reserve</th>
        </tr>
      </thead>
      <tbody>
        {#each paginatedLocations as location}
          <tr on:click={() => openPopup(location)}>
            <td>{location.room_id}</td>
            <td>{location.name}</td>
            <td>{location.location}</td>
            <td>{location.category}</td>
            <td>{location.capacity}</td>
            <td>
              {#each location.resources as resource}
                <span class="resource">{resource}</span>
              {/each}
            </td>
            <td>
              <button
                on:click={() => openPopup(location)}
                class="reserve-button"
              >
                Reserve
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="pagination">
    <button on:click={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button on:click={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
  <Popup {showPopup} on:close={closePopup}/>

</div>

<style>

  .locations-container {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: 100%;
  }

  .locations-table-wrapper {
    overflow-x: auto;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background: #f8f9fa;
  }

  .status {
    font-weight: bold;
    text-align: center;
  }

  .status.available {
    color: green;
  }

  .status.unavailable {
    color: red;
  }

  .reserve-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .reserve-button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .pagination button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .pagination button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
</style>
