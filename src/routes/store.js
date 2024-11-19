import wcharl140 from "./mockData/rooms/60WCHARL_140.json";
import wcharl220 from "./mockData/rooms/60WCHARL_220.json";
import artsci27 from "./mockData/rooms/ARTSCI_27.json";
import artsci255 from "./mockData/rooms/ARTSCI_255.json";
import baflory145 from "./mockData/rooms/BAFLORY_145.json";
import cliftct1109 from "./mockData/rooms/CLIFTCT_1109.json";
import daapstan111 from "./mockData/rooms/DAAPSTAN_111.json";
import lindhall0075 from "./mockData/rooms/LINDHALL_0075.json";
import mantei838 from "./mockData/rooms/MANTEI_838.json";
import teachers340 from "./mockData/rooms/TEACHERS_340.json";
import zimmer414 from "./mockData/rooms/ZIMMER_414.json";
import roomAvailability from "./mockData/availabilities.json";
import { writable } from "svelte/store";

const roomAvailabilityArray = roomAvailability["availabilities"];
export const availability = writable(roomAvailability);
export const selectedRoomId = writable('');
export const availableRooms = writable([]);

export const rooms = {
  wcharl140,
  wcharl220,
  artsci27,
  artsci255,
  baflory145,
  cliftct1109,
  daapstan111,
  lindhall0075,
  mantei838,
  teachers340,
  zimmer414
};

export const eventTimeChange = writable({
    date: String,
    startTime: String,
    endTime: String
});

eventTimeChange.subscribe((value) => {
    handleEventTimeChange(value);
});
 
function handleEventTimeChange(value) {
    // Your logic here
    let { date, startTime, endTime } = value;
    // variables for filtering
    let startTimeFilter = startTime.toString().split(":")[0]+":00";
    let endTimeFilter = Number(endTime.toString().split(":")[0]) + 1 +":00";
    let startTimeFilter2 = Number(startTime.toString().split(":")[0]);
    let endTimeFilter2 = Number(endTime.toString().split(":")[0]) + 1;
    let dateFilter = date;
    // console.log(date, startTimeFilter, endTimeFilter);
    let filteredData, freeRoomList = timeFilteredData(startTimeFilter2, endTimeFilter2, dateFilter);
    // console.log('freeRoomList',freeRoomList);
    let freeRooms= freeRoomList[0];

    for (let i = 0; i < freeRoomList.length; i++) {
        // console.log('freeRoomList[i]', freeRoomList[i]);
        for (let j = 1; j < freeRooms.length; j++) {
            if (!freeRoomList[i].includes(freeRooms[j])) {
                // console.log('freeRooms[j]', freeRooms[j]);
                freeRooms.splice(j, 1);
            }
        }
    }
    // availableRooms.set(freeRooms);
    // console.log('freeRooms final', freeRooms);
    let availableRoomDetails = [];
    if (freeRooms)
        for (let roomId of freeRooms) {
            for (let roomKey in rooms) {
                if (rooms[roomKey].room_id === roomId) {
                    availableRoomDetails.push(rooms[roomKey]);
                    break;
                }
            }
        }

    // console.log('availableRoomDetails', availableRoomDetails);

    availableRooms.set(availableRoomDetails);
}

function timeFilteredData (startTime, endTime, date) {
    let freeRoom = [];
    let filteredData = roomAvailabilityArray.filter((timeSlot) => {
        // let times = timeSlot.times;
        // // Convert times into a normal object
        timeSlot = Object.assign({}, timeSlot);
        // console.log('times', times["09:00"]);
        let timeSlotDate = timeSlot.date;
        // console.log('im here1', timeSlotDate);
        if (timeSlotDate === date) {
            if (startTime > 8 && endTime < 24) {
                for (let i = startTime; i < endTime+1; i++) {
                    let time = (i < 10 ? `0${i}` : i) +":00";
                    // console.log('time', time);
                    const curRooms = timeSlot[time]
                    freeRoom.push(curRooms);
                }}   
            // console.log(freeRoomAtStartTime);
            return timeSlot;
        }
    });
    // console.log('Free Room list', freeRoom);
    return filteredData, freeRoom;
}




