# 25LiveREDO https://25-live-redo.vercel.app/
This is a Svelte+Vite project that redesigns the user interface for the 25Live scheduling system (https://25live.collegenet.com/pro/uc#!/home/dash) for the University of Cincinnati. This system is used by multiple colleges/universities and other organizations to schedule one-day events, such as classes and student hosted events. (To know more -> https://knowledge25.knowledgeowl.com/help/about-25live) A more pinpoint description is that this system is made only to schedule events and request resources for events, such as a projector. You wouldn't visit this website to sign up for an event. The redesign was made with students in mind and focuses on easibility of reserving a location. We surveyed and interviewed a small pool of people from the University of Cincinnati and some outside to account for in our decision-making.

# Redesign Research
## Survey Results
The success of any platform lies in its ability to effectively and efficiently meet user needs. To evaluate how well 25Live College Net at the University of Cincinnati is serving its users, we carried out a feedback survey to identify common challenges, frustrations, and areas needing improvement. This survey focused on students and other users of the platform to understand their usage frequency and select participants for follow-up interviews. These interviews aim to delve deeper into the platform’s usability and gather insights on user-reported experiences.

![image](https://github.com/user-attachments/assets/c12066cd-c50a-4f56-b465-22b930f896dd)

## Interview Questions and Results
### Interview Questions

1. What has been your overall experience using 25Live College Net? Can you describe any frustrations or annoyances you've encountered?
2. Are there any specific features of 25Live that you find particularly frustrating or lacking? How do they impact your experience?
3. We will show the user the web page from our laptop. What do you focus on when first opening the page?
4. We are trying to redesign the main functionality of the website which is express scheduling. What is your experience regarding the usage of such functionality? 
5. How easy or difficult is it for you to navigate the platform and use the express scheduling for a room functionality?

### Answers Summary
1. 
- It works, but it’s not user-friendly. I often get stuck trying to find what I need.
- It’s okay, but the website feels all over the place and it will take me more than 10 minutes to find what I want. 
- I get frustrated with how many steps it takes just to make a simple room reservation.

2.
- There are too many options to pick a room, from scheduling an event to finding the time, finding the room, and many more.
- There is no confirmation whatsoever if I have successfully picked a room.
- Whenever I need to pick a room, or a time, it seems like they are in separate places and I have to read a manual to know how to do it.

3.
- I look for a clear way to see available rooms and time slots right away.
- I focus on whether the layout is easy to understand or if it feels cluttered.
- The first thing I notice is how the menu and navigation are organized.
  
4.
- It’s not very intuitive. I usually second-guess if I’ve done it correctly.
- The process works, but it feels slow and involves too many unnecessary steps.
- I like the idea of express scheduling, but I’ve had issues with confirming my bookings.

5.
- It’s a bit difficult to navigate; I often feel like I’m guessing my way through it.
- Finding the express scheduling option takes too many clicks, which is annoying.
- It’s manageable, but the interface could be simpler and more straightforward.

### Findings 
From the sample responses, our team has identified several recurring themes and insights about user experiences with 25Live College Net. Our team has also managed to capture the user's initial focus on the website by also asking them what they immediately focus on when we show them the 25 Live CollegeNet website. These findings can guide improvements to the platform:

1. **General Usability Issues**: 
The platform is perceived as outdated, with a cluttered interface and poor user experience.
Impact: Users feel frustrated and discouraged when trying to perform simple tasks, such as finding rooms or completing reservations.

2. **Navigation Challenges**: 
Navigating the website is not intuitive due to the layout of the webpage, all of the functionality although presented, is not explained, and users often feel uncertain and intimidated about where to find specific features like express scheduling.
Impact: The lack of intuitive navigation leads to inefficiency and user dissatisfaction, particularly when users are in a hurry.

3. **Ineffective Search and Filtering**: 
The search feature lacks detailed filters (e.g., by room size, equipment, or specific needs), forcing users to work their way through irrelevant and redundant results that can be better explained.
Impact: This inefficiency wastes time and causes frustration, especially for users with specific requirements.

4. **Express Scheduling Limitations**: 
Express scheduling is not intuitive, involves clicking or trying out too many "boxes" on the website, and lacks clarity about whether bookings are confirmed.
Impact: Users often feel unsure about whether they’ve successfully reserved a room, which undermines the purpose of a quick scheduling feature.

### Focused List of Design Plans for Redesigned Room Scheduling Interface
#### **Primary Functions**
1. **Reserving a Study Room**:
   - Create a user-friendly form to book a study room.
   - Ensure users can easily input relevant details like date, time, and preferences.

2. **Confirmation of Room Approval**:
   - Display clear, immediate confirmation messages once a room reservation is approved.

3. **Redesign Express Scheduling (Main Focus)**:
   - Streamline the process to make it quick and intuitive for users.
   - Ensure users can reserve a room with minimal steps.

4. **Looking Up Rooms/Time Slots**:
   - Implement a search feature to browse available rooms and their respective time slots.

5. **Room Identification Across Buildings**:
   - Add clear identifiers for rooms, such as unique codes or tags for different buildings.
   
#### **Core Design Tasks**
1. **Express Scheduling Form**:
   - Simplify input fields and reduce unnecessary steps.
   - Include smart suggestions based on user preferences or past bookings.

2. **Layout**:
   - Design a clean, responsive layout for both the main page and individual room details.

3. **List of Rooms**:
   - Display rooms in an organized, easy-to-read list format.
   - Include sorting and filtering options for better usability.

4. **Filters**:
   - Add filters for room equipment, room size, and availability by time.

5. **Room Information Popup**:
   - Design a popup showing detailed information about the selected room, including:
     - **Room Info**: Name, location, and capacity.
     - **Time Slots**: Available times for the selected date.
     - **Map**: Clear visual showing the room’s location within the building.
     - **Calendar**: Interactive calendar for scheduling.

#### **Coding Tasks**
1. **Data Management**:
   - Build a mock data list of rooms in a `store.js` file to share between components.

2. **Navigation**:
   - Build a navigation bar for easy access to key sections of the platform.

3. **Main Page**:
   - Design and code the main page to include:
     - A time-selection form.
     - A dynamically updated list of available rooms based on the selected time.

4. **Room Choosing Popup**:
   - Develop the popup component with the following:
     - **Header**: Room name and quick summary.
     - **Details**: Room info (location, capacity, equipment).
     - **Map**: Visual map of the room’s building.
     - **Calendar**: Interactive calendar to view and select availability.

#### **Side Features**
1. **Account Views**:
   - Create different layouts and access levels for various types of users (e.g., students, faculty, staff).

2. **Club Reservations**:
   - Add a feature specifically for club-based room reservations, allowing bulk bookings or recurring events.

3. **Room Locations**:
   - Display room locations clearly on a map with building identifiers and directions.

## Design Sketches
The initial design and layout of the 25LiveREDO interface were conceptualized using Figma. These sketches provided a blueprint for the user-friendly redesign and guided the development process to ensure a seamless user experience.
You can view our Figma sketches here: https://www.figma.com/design/TEEp2ZRlAZX6kpkigvbFUI/25Live?node-id=0-1&t=TVDlEgaWrWO6NKoO-1

## Design Feedbacks

### **Student Feedback 1: Huy Le, a Senior**
The new design is so much easier to use, especially with the express scheduling. I like how less cluttered you make it and also since it only has two boards that either filter by time or by locations I find it to be much quicker. 

### **Student Feedback 2: Alice Lieu, a Senior**
The redesign is a big improvement, and the interface feels much cleaner now. The express scheduling process is more straightforward, and the popup with room details, especially the map, is a great addition. However, the calendar not updating in real-time can still cause confusion, so syncing availability instantly would make a huge difference.

### **Student Feedback 3: Desmond, a Senior**
I think it is much cleaner and I would definitely use it more often whenever I want to book a room since it is much more intuitive compared to the old website. There are plenty of times that I have forgotten that I have booked a room since it does not show the book room anywhere and I have to dig through the calendar on the old website to view it. But with this new confirmation, I think it is much more easier for me to find it now and remind myself. 

# Redesign Implementation


## Data Unsecured
The website does not ask for your login upon visiting the site and gives a guest user access to all events and location information hosted by the organization, which shouldn't be accessible by a guest user. However, it is not accessible for a logged-in user. Other colleges/universities that use 25Live require login to access the reservation system. The only other 25Live we found that did not was the University of Louisville. Because of that, this project redesign is the layout for a logged-in user shown in the picture below.

![Screenshot 2024-11-19 181854](https://github.com/user-attachments/assets/7c88d7d9-2368-4448-a7fa-65edc34ef0fe)

## Layout
On our main view, there are three components: event form, list of rooms, and a list of the user's current events. The items in the top right are only there to simulate the original. We didn't include tasks because we didn't want to carry over any of 25Live's dreams of being a planner. 

![Screenshot 2024-11-19 182214](https://github.com/user-attachments/assets/998cfabd-e375-4dd8-9f8a-ba97ee441268)

Things we cutoff completely was reports, event drafts, and tasks. The tasks and reports were features that seemed to want to make 25live act as a pseudo-planner, but considering how the website is used only for reservations they felt unnecessary. We also couldn't find anyone who considered those features, which for the most part were self-reports. Event drafts were something we considered unnessary because there didn't seem an important reason to allow the user to do that. The component that shows drafts puts them two sections: one where you are the scheduler and one where you are the requestor. Considering how you can't sign up for events, its a wonder why requester is a category and why they used that instead of participant.

## Event Form
There's a total of four forms that can be used to reserve a room on the original. We based our form primarily on what was called the express scheduling form, which asked for a name for the event, a start time, an end time, and would show the available rooms at that time and/or date in a dropdown menu. It also let you see the duration of the event. We theorize this was displayed for debugging purposes and just left in because there's a time limit you can reserve a room for. Since we couldn't formally view that information and see how it differentiated across different rooms, we did not implement that feature. If we were to continue working on this, we would put more research into the rooms time capacity and implement a time limit.

For error checking: we made sure an event wasn't being made before the current date, that the end time didn't go to the next day, and a location was selected.

https://github.com/user-attachments/assets/a39ae9e8-754f-4410-8b63-b7af8e773606

We decided to make the name optional because it was only viewable by the user for the most part. We only know one building that has little screens by the door for the study rooms that shows the reservations and it mattered. From our interviews, filling out the name rarely mattered because they didn't often have multiple reservations at a time and didn't look back previous events.

To look for a room, available rooms would immediately populate in the search component below it when a time slot was entered. Only after selecting a room, a popup will show asking you to verify the information for the reservation.

## Current Events
Any scheduled event will show up in the Current Events Component as their own component and any more events will be stacked below it. To the right of an event component is a cancel button, which will give you a popup asking for confirmation before deleting. There's no cancel event option on the original website.

https://github.com/user-attachments/assets/40c4413b-fa73-4b2c-8b3e-5f5084d09ba3

## Other forms
A more complicated form was labeled as an event wizard and was accessible in a link at the top right. We didn't include this - not just because we wanted to focus on the main page - because it looked geared for formal or big events. Among the students we interviewed, most just used it for study rooms or for an activity. This form asked for sponsors, comments, and included the option to attach documents. You could also put in a number for posts and pre-days. If we did decide to implement this form, we would've just let the user just make a reservation over a time period.

The components in this image are two of the "forms" and were cutoff for the redundancy of it. The top one is basically another version of the express scheduling but asks for the number of attendees and has additional filters in the dropdown for the available rooms, which is hard to see and work with in a dropdown. This also brings the question of why would you need the number of attendees.

![Screenshot 2024-11-19 173721](https://github.com/user-attachments/assets/51ace641-6393-4e76-a34d-0a32529d2fa3)

The bottom option is hard to call a form when it's just a searchbar to look up a location name. 

## List of Rooms Availabilities
### Searching Issue
There is a lot of searching involved in the functionality of it which had filters for things people didn't really know about, especially when just trying to reserve one of the many study roooms. A big issue is there's no information displayed by default when searching which makes it difficult when you're not familiar with the rooms. Search components outside of location were not necessary because there is not any utility to them.

![Screenshot 2024-11-19 164833](https://github.com/user-attachments/assets/b9a64272-eac3-4be6-9a8d-ba7cbbc8e8b3)

Thus, we removed the starred searches and quick search components, especially events and organizations. Even resources is unnecessary because from what we found, they're equipment that's already located in the room and could be looked up when searching up a location. There are many options in the search filters that confuse people and many people avoid using it. Searching for events is especially unnecessary considering people do not need to sign up for events. We couldn't find anyone who used these features either.

This led us to push the search and displaying the list of available rooms into one component. But for all the scattered and redundant features of the website, the most promising feature of the website is how immediate it is for the available rooms to show up when filling in the wanted time or/and date. From the start, we strongly wanted to be able demonstrate that in our redesign, and we did. 

### Current Availabilities section 
The Current Availabilities section, the main purpose of this section is to clearly list out all available locations to reserve to the user, the section includes a filter that allows the user to filter by building's name and categories. Each row of the locations shows clearly the location, and purposes. The top left of the section will show how many locations are available according to what filter the user applies.
<img width="1435" alt="Screen Shot 2024-11-19 at 4 26 14 PM" src="https://github.com/user-attachments/assets/a959d356-5f30-45ff-a494-bf67226a4d92">

<img width="1374" alt="Screen Shot 2024-11-19 at 4 29 41 PM" src="https://github.com/user-attachments/assets/4d5bfc19-58f0-4871-9518-e3f5e90788c8">
        
### Room Information Popup
Each room name is made to be clickable, once the user clicks on the name of a room, a popup will show all the details of the selected room, including a timeslot of when the room is available through a calendar.
        
<img width="730" alt="Screen Shot 2024-11-19 at 4 31 18 PM" src="https://github.com/user-attachments/assets/0873f19d-6ad4-4cde-8e2b-f1c300f32236">

A Direction tab is also provided immediately below the calendar, providing the user with the precise location of the room, and allowing for better navigation.

<img width="711" alt="Screen Shot 2024-11-19 at 4 31 53 PM" src="https://github.com/user-attachments/assets/a38cde65-5e63-45fd-aa3f-13e454e43727">

## Libraries
Key dependencies include:

Svelte: A front-end framework that compiles components into efficient JavaScript code, improving performance and user experience.

Vite: A build tool and development server offering rapid compilation and hot module replacement, streamlining the development process.

Vercel: provides a seamless platform for deploying our web applications.

## Website Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/s06DvMxUOyk/0.jpg)](https://www.youtube.com/watch?v=s06DvMxUOyk)

## Future Considerations
1. Event Management and Collaboration Features
While the current redesign focuses on room reservations, future iterations could incorporate features to support event management. This includes tools for collaborating with participants, attaching documents to reservations, and syncing with external calendars like Google Calendar or Outlook. Multi-user planning tools could also be added to streamline group coordination for events.

2. Secure Access with University Authentication
Currently, the platform allows guest access to event and location data, which could be a potential security risk. Future updates will aim to integrate university Single Sign-On (SSO) systems, ensuring secure and authorized access.

3. Enhanced Resource Management
To further improve functionality, future development could introduce advanced resource allocation features. Users could request additional resources like projectors, whiteboards, or specific seating arrangements when reserving a room, with the platform providing smart recommendations based on availability.

4. Pathfinder Visualization
We also would like to introduce a way for the user to find the path to their reserved rooms. However, due to limitations and time constraints, this map has been omitted from the current website. But the codes and components are already presented for us to easily implement it. 
