<script>
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = Array.from({ length: 17 }, (_, i) => `${7 + i}:00`);
    import roomData from '../routes/mockData/60WCHARL_140.json' ;
    console.log(roomData);


</script>

<style>
    .calendar {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        border-top: black solid 1px;
        border-left: black solid 1px;
        background-color: #ccc;
    }
    .calendar div {
        border-bottom: black solid 1px;
        border-right:black solid 1px;
        background-color: #fff;
        padding: 5px;
        text-align: center;
    }
    .header {
        font-weight: bold;
        background-color: #f0f0f0;
    }
</style>

<div class="calendar">
    <div class="header"></div>
    {#each weekdays as day}
        <div class="header">{day}</div>
    {/each}
    {#each timeSlots as time}
        <div class="header">{time}</div>
        {#each weekdays as _}
            <div>free</div>
        {/each}
    {/each}
</div>