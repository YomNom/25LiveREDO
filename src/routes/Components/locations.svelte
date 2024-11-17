

<script lang="ts">
    import Popup from "./Popup.svelte";

    type Location = {
      name: string;
      status: string;
      location: string;
      category: string;
      capacity: number;
      resources: string[];
    };

    let showPopup = false;
  
    let locations: Location[] = [
      { name: "60 West Charlton 220", status: "Available", location: "60 West Charlton", category: "Study Room", capacity: 74, resources: ["Carpet", "White Board", "TV", "+ 1"] },
      { name: "60 West Charlton 140", status: "Unavailable", location: "60 West Charlton", category: "Study Room", capacity: 6, resources: ["Projector", "White Board"] },
      { name: "Clifton Court Hall", status: "Available", location: "Clifton Court Hall", category: "Study room", capacity: 20, resources: ["Wi-Fi", "Projector"] },
      { name: "Lindner Business Center 102", status: "Available", location: "Linder Business Building", category: "Study Room", capacity: 10, resources: ["White Board", "Wi-Fi"] },
      { name: "Teachers 340", status: "Unavailable", location: "Teachers College", category: "Studio", capacity: 15, resources: ["Easel", "Canvas Supplies"] },
      { name: "Zimmer", status: "Available", location: "Zimmer Roof Garden", category: "Outdoors", capacity: 50, resources: ["Outdoors"] },
      { name: "Study Room 201", status: "Available", location: "Langsam Library", category: "Quiet Study", capacity: 50, resources: ["Wi-Fi", "Power Outlets"] },
      { name: "Computer Science Lab 300", status: "Unavailable", location: "Mantei Center", category: "Lab", capacity: 30, resources: ["Computers", "Wi-Fi", "White Board"] },
      { name: "Art Sci 255", status: "Available", location: "Arts & Sciences Hall", category: "Meeting Room", capacity: 12, resources: ["TV", "Wi-Fi"] },
      { name: "Art Sci 27", status: "Available", location: "Arts & Sciences Hall", category: "Meeting Room", capacity: 5, resources: ["Piano", "Soundproof Walls"] },
      { name: "Teachers 344", status: "Unavailable", location: "Teachers College", category: "Study Room", capacity: 10, resources: ["Wi-Fi", "Power Outlets"] },
      { name: "UCBA Flory Hall 145", status: "Available", location: "BA Flory Center", category: "Lab", capacity: 20, resources: ["Chemicals", "Lab Equipment", "Projector"] },
      { name: "Design Lab 401", status: "Unavailable", location: "DAAP Design Building", category: "Lab", capacity: 25, resources: ["3D Printer", "White Board"] },
      { name: "Wolfson Center 4300", status: "Available", location: "Wolfson Center", category: "Quiet Study", capacity: 10, resources: ["Wi-Fi", "Power Outlets"] },
      { name: "Zimmer 414", status: "Unavailable", location: "Zimmer Hall", category: "Study Room", capacity: 8, resources: ["White Board", "TV"] },
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
          <th>Room Name</th>
          <th>Status</th>
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
            <td>{location.name}</td>
            <td class="status {location.status === 'Available' ? 'available' : 'unavailable'}">
              {location.status}
            </td>
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
                disabled={location.status !== "Available"}
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

  <!-- Popup Integration -->
  <!-- <Popup
    isVisible={isPopupVisible}
    message={`Are you sure you want to reserve "${selectedLocation?.name}"?`}
    confirmLabel="Yes"
    cancelLabel="No"
    on:confirm={handleConfirm}
    on:cancel={closePopup}
  /> -->
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

  .resource {
    margin-right: 5px; 
    background-color: #f0f0f0;
    border-radius: 3px; 
  }
</style>
