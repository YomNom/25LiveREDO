
// import { writable } from 'svelte/store';
// import fs from 'fs';
// import path from 'path';

// export const rooms = writable([]);

// export function loadRooms() {
//     const roomsDir = path.resolve(__dirname, 'rooms');
//     const roomFiles = fs.readdirSync(roomsDir).filter(file => file.endsWith('.json'));

//     const roomData = roomFiles.map(file => {
//         const filePath = path.join(roomsDir, file);
//         const fileContent = fs.readFileSync(filePath, 'utf-8');
//         return JSON.parse(fileContent);
//     });

//     rooms.set(roomData);
// }

// // Load rooms immediately when the module is imported
// loadRooms();
room = [
{
    "room_id": "60WCHARL 140",
    "name": "60 West Charlton 140",
    "location": "60 West Charlton",
    "category": "Study Room",
    "capacity": 6,
    "resources": [
        "Projector",
        "White Board"
    ]
};

{
    "room_id": "60WCHARL 140",
    "name": "60 West Charlton 140",
    "location": "60 West Charlton",
    "category": "Study Room",
    "capacity": 6,
    "resources": [
        "Projector",
        "White Board"
    ]
}
]