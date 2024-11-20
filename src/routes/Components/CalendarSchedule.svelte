<script>
    import {filteredAvailability, selectedRoomId} from '../store';
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = Array.from({ length: 17 }, (_, i) => (7+i < 10) ?`0${7 + i}:00` :`${7 + i}:00`);
    const curOpennedRoom = Object.fromEntries(
        filteredAvailability
            .filter(a => a.room === $selectedRoomId)
            .map(room => [room.room, room])
    );
    
    
    let selectedWeek = "2024-11-18"; // default week
    let selectedWeekIndex = 0;
    // console.log(selectedWeek);
        
    function handleWeekChange() {
        switch (selectedWeek) {
            case "2024-11-18":
                selectedWeekIndex = 0;
                break;
            case "2024-11-25":
                selectedWeekIndex = 1;
                break;
            case "2024-12-02":
                selectedWeekIndex = 2;
                break;
        }
        // console.log(selectedWeekIndex);
    }
    let timeSlotsByWeek = [];
    $: {
        timeSlotsByWeek = curOpennedRoom[$selectedRoomId]['weeks'][selectedWeekIndex];
        console.log(timeSlotsByWeek[0]['times'].includes('7:00'));
    }

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
        align-items: center;
        justify-content: center;
        font-size: fit-content;
    }

    .week-selector {
        display: flex;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
    }
    #free-slot {
        font-size: 18px;
        padding: 1px; 
        margin: 0
    }
    #busy-slot {
        background-color: #b9b9b9;
        font-size: 18px; 
        padding: 1px; 
        margin: 0
    }
</style>
<div>
    <div class="week-selector">
        <div style=" margin-right: 1rem">
            <label for="weekSelect">Select a week:</label>
        </div>
        <select 
            id="weekSelect" 
            bind:value={selectedWeek} 
            on:change={() => handleWeekChange()}>
            {#each Array.from({length: 3}, (_, i) => {
            const date = new Date(2024 , 10 , 18+i*7);
            return date.toISOString().slice(0, 10);
            }) as week}
            <option value={week} selected={week === selectedWeek}>Week of {new Date(week).toLocaleDateString()}</option>
            {/each}
        </select>
    </div>

    <div class="calendar">
        <div class="header"></div>
        {#each weekdays as day}
            <div class="header">{day}</div>
        {/each}
        {#each timeSlots as time}
            <div class="header">{time}</div>
            {#each weekdays as day}
                {#if timeSlotsByWeek[weekdays.indexOf(day)]['times'].includes(time)}
                    <div id="free-slot">
                        free
                    </div>
                {:else}
                    <div id="busy-slot">
                           busy
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
