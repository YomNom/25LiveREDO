# 25LiveREDO
This is a Svelte+Vite project that redesigns the user interface for the 25Live scheduling system (https://25live.collegenet.com/pro/uc#!/home/dash) for the University of Cincinnati. This system is used by multiple colleges/universities and other organizations to schedule one-day events, such as classes and student hosted events. (To know more -> https://knowledge25.knowledgeowl.com/help/about-25live) A more pinpoint description is that this system is made only to schedule events and request resources for events, such as a projector. You wouldn't visit this website to sign up for an event. The redesign was made with students in mind and focuses on easibility of reserving a location.

## Issues with 25Live for the University of Cincinnati
### Data Unsecure
The website does not ask for your log in upon visiting the site and gives a guest user access to all events and location information hosted by the organization, which shouldn't be accessible by a guest user. However, it is not accessible for a logged-in user. Other colleges/universities that use 25Live require login to access the reservation system. The only other 25Live we found that did not was by the University of Louisville. Because of that, this project redesign is the layout for a logged-in user.

### Information Overload
To reiterate, this system works primarily as a reservation system. It does not ask the user to verify the reservation at location nor does it ask participants of an event to sign up for the event. Generally, participant just needs to know the location, date, and time to show up. Because we are students, 

The website gives the option to lists "tasks" needed to be done during the event. This info seems arbritrary and unnecessary. We couldn't find any functionality for that information besides data collection. 

# Event Form

# List of Rooms





## Functionalities introduction

 Part 1 -- Current Availabilities section 
          For The current Availabilities section, the main purpose of this section is to clearly list out all available locations to reserve to the user, the section includes a filter that allows the user to filter by building's name and catagories. each row of the locations shows clearly the location, purpose. the top left of the section will show how many locations available accordings to what filter the user applies.
        <img width="1435" alt="Screen Shot 2024-11-19 at 4 26 14 PM" src="https://github.com/user-attachments/assets/a959d356-5f30-45ff-a494-bf67226a4d92">
        <img width="1374" alt="Screen Shot 2024-11-19 at 4 29 41 PM" src="https://github.com/user-attachments/assets/4d5bfc19-58f0-4871-9518-e3f5e90788c8">

        resources and max capacity of the respective room. Each room name is made to be clickable, once the user clicks on the name of a room, a popup will show all the details of the selected room, including a timeslot of when the room is available through a calender.
        
        <img width="730" alt="Screen Shot 2024-11-19 at 4 31 18 PM" src="https://github.com/user-attachments/assets/0873f19d-6ad4-4cde-8e2b-f1c300f32236">
       A Directions tab is also provided immediately below the calender, providing the user with the precise location of the room, allowing for better Navigation.
        <img width="711" alt="Screen Shot 2024-11-19 at 4 31 53 PM" src="https://github.com/user-attachments/assets/a38cde65-5e63-45fd-aa3f-13e454e43727">
        
# Room Information Popup

# Libraries
