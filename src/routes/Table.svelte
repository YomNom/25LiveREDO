<script>
	import ResourceTag from "./ResourceTag.svelte";

    export let tableData;
    let data = "something";
  </script>
  
  <table>
    <tbody>
      {#each tableData as row}
        <tr>
          <td style="width:30%">{row.name}</td>
          <td style="display: flex">
            {row.value} 
            <ResourceTag {data}/>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
      text-align: left;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

  </style>