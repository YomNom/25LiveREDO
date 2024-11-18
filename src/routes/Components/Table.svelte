<script>
	import ResourceTag from "./ResourceTag.svelte";
  export let selectedLocation;
</script>
  
<table>
  <tbody>
    {#each Object.entries(selectedLocation) as [key, value]}
      {#if key !== 'room_id'}
        <tr>
          <td style="width:30%">
            {key.toUpperCase()}
          </td>
          {#if key === "resources"}
            <td style="display: flex; margin: 0">
              {#each value as tag}
                <ResourceTag tag={tag} />
              {/each}
            </td>
          {:else}
            <td style="display: flex">
              {value} 
            </td>
          {/if}
        </tr>
      {/if}
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

</style>