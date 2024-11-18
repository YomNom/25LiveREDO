<script>
  import { onMount } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const accessToken = 'pk.eyJ1IjoibmhxbmhhdC1iYXRjaDQzIiwiYSI6ImNsdmFlcGE5dTE1cjIybGt3OTMxNDhtMW0ifQ.AZsY_7M4H-06HIugpUbgVg'; 
  const universityCoordinates = [-84.5162, 39.1312];
  export let selectedLocation;
  const locationCoordinates = selectedLocation.coordinates;
  let mapContainer;

  onMount(() => {
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: locationCoordinates ? locationCoordinates :universityCoordinates,
      zoom: 15
    });

    new mapboxgl.Marker()
      .setLngLat(locationCoordinates ? locationCoordinates :universityCoordinates)
      .setPopup(new mapboxgl.Popup().setHTML('<h1>University of Cincinnati</h1>'))
      .addTo(map);
  });
</script>

<style>
  .map-container {
    height: 400px; 
    width: 100%;  
    background-color: #f0f0f0;
  }
</style>

<div bind:this={mapContainer} class="map-container"></div>