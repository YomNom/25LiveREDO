<script lang="ts">
    import Popup from "./Popup.svelte";
    // import InfoPopup from "./InfoPopup.svelte";
    import UnreservePopup from "./UnreservePopup.svelte";

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

// Variables
let buildingFilter: string = "All";
$: buildingOptions = ["All", ...new Set(locations.map((location) => location.location))];
$: filteredLocations = buildingFilter === "All"
    ? locations
    : locations.filter((location) => location.location === buildingFilter);

let currentPage = 1;
let itemsPerPage = 7;
$: totalPages = Math.ceil(filteredLocations.length / itemsPerPage);
$: paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
);

let isPopupVisible = false;
let isInfoPopupVisible = false;
let isUnreservePopupVisible = false; // For unreserve confirmation
let isNotifyPopupVisible = false; // Notify user to unreserve
let selectedLocation: Location | null = null;
let reservedLocation: Location | null = null; // Track the reserved location
export let selectedRoomId: string;

function openPopup(location: Location) {
    if (reservedLocation && reservedLocation !== location) {
        isNotifyPopupVisible = true; // Show notification popup
    } else {
        selectedLocation = location;
        isPopupVisible = true;
    }
}

function openInfoPopup(location: Location) {
    selectedLocation = location;
    isInfoPopupVisible = true;
}

function openUnreservePopup(location: Location) {
    selectedLocation = location;
    isUnreservePopupVisible = true;
}

function closePopup() {
    isPopupVisible = false;
    isInfoPopupVisible = false;
    isUnreservePopupVisible = false;
    isNotifyPopupVisible = false;
    selectedLocation = null;
}

function handleConfirm() {
    if (selectedLocation) {
        // Unreserve the previous location if it exists
        if (reservedLocation) {
            reservedLocation.status = "Available";
        }

        // Reserve the selected location
        reservedLocation = selectedLocation;
        reservedLocation.status = "Unavailable";
        locations = [...locations]; // Trigger reactivity
    }
    closePopup();
}

function handleUnreserve() {
    if (selectedLocation && reservedLocation === selectedLocation) {
        reservedLocation.status = "Available";
        reservedLocation = null;
        locations = [...locations]; // Trigger reactivity
    }
    closePopup();
}

function handleInfoPopupUnreserve() {
    handleUnreserve(); // Use the same logic as handleUnreserve
}

function changePage(newPage: number) {
    if (newPage > 0 && newPage <= totalPages) {
        currentPage = newPage;
    }
}
</script>

<div class="locations-container">
<h2>Select a Location</h2>
<div class="header">
    <p class="location-count">{filteredLocations.length} available locations</p>
    <div class="filter">
        <label for="building-filter">Filter by Building:</label>
        <select id="building-filter" bind:value={buildingFilter}>
            {#each buildingOptions as building}
                <option value={building}>{building}</option>
            {/each}
        </select>
    </div>
</div>

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
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each paginatedLocations as location}
                <tr class="{reservedLocation === location ? 'reserved-highlight' : ''}">
                    <td on:click={() => openInfoPopup(location)} class="clickable">{location.name}</td>
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
                    <td class="cell">
                        <input
                          type="radio"
                          name="room-selection"
                          value={location.room_id}
                          bind:group={selectedRoomId}
                        />
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

<!-- Reserve Confirmation Popup -->
<Popup
    isVisible={isPopupVisible}
    message={`Are you sure you want to reserve "${selectedLocation?.name}"?`}
    confirmLabel="Yes"
    cancelLabel="No"
    on:confirm={handleConfirm}
    on:cancel={closePopup}
/>

<!-- Unreserve Confirmation Popup -->
<UnreservePopup
    isVisible={isUnreservePopupVisible}
    message={`Are you sure you want to unreserve "${selectedLocation?.name}"?`}
    confirmLabel="Yes"
    cancelLabel="No"
    on:confirm={handleUnreserve}
    on:cancel={closePopup}
/>

<!-- Notify User to Unreserve Popup -->
<Popup
    isVisible={isNotifyPopupVisible}
    message={`You have already reserved "${reservedLocation?.name}". Please unreserve it first before selecting another location.`}
    confirmLabel="Okay"
    on:confirm={closePopup}
/>

<!-- Room Info Popup -->
<!-- {#if isInfoPopupVisible && selectedLocation}
    <InfoPopup
        isVisible={isInfoPopupVisible}
        location={selectedLocation}
        confirmLabel={reservedLocation === selectedLocation ? "Unreserve" : "Reserve"}
        cancelLabel="Close"
        on:confirm={reservedLocation === selectedLocation ? handleInfoPopupUnreserve : handleConfirm}
        on:cancel={closePopup}
    />
{/if} -->
</div>
<style>
.locations-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter {
  display: flex;
  align-items: center;
  gap: 10px;
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

.resource {
  display: inline-block;
  padding: 3px 8px;
  background: #e9ecef;
  color: #495057;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.875rem;
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
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.reserved-highlight {
    background-color: #e6ffe6; /* Light green for highlighting reserved row */
}

</style>
