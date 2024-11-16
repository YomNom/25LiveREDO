<!-- <script>
  import { onMount } from 'svelte';
  import { Map } from 'mapbox-gl';
  import '@site/src/node_modules/mapbox-gl/dist/mapbox-gl.css';

  const accessToken = 'pk.eyJ1IjoibmhxbmhhdC1iYXRjaDQzIiwiYSI6ImNsdmFlcGE5dTE1cjIybGt3OTMxNDhtMW0ifQ.AZsY_7M4H-06HIugpUbgVg'; // Replace with your Mapbox access token
  const coordinates = [39.3299, -84.4400]; // Cincinnati coordinates
</script>

<style>
  .map-container {
    height: 400px;
    width: 100%;
  }
</style>

<div class="map-container">
  <Map
    accessToken={accessToken}
    options={{
      center: coordinates,
      zoom: 13
    }}
    on:load={(event) => {
      const map = event.detail.map;
      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup().setHTML('<h1>60 West Charlton</h1>'))
        .addTo(map);
    }}
  />
</div> -->

<script>
  import { onMount } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';

  const accessToken = 'pk.eyJ1IjoibmhxbmhhdC1iYXRjaDQzIiwiYSI6ImNsdnZ0aTFjbzFweHkycW85dDI1cXZwY2oifQ.WtkdamBLblQNz4p7C50BNQ'; // Replace with your Mapbox access token
  const coordinates = [39.3299, -84.4400]; // Cincinnati coordinates

  let mapContainer;

  onMount(() => {
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 13
    });

    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .setPopup(new mapboxgl.Popup().setHTML('<h1>60 West Charlton</h1>'))
      .addTo(map);
  });
</script>

<style>
  .map-container {
    height: 400px;
    width: 100%;
  }
</style>

<div class="map-container" bind:this={mapContainer}></div>