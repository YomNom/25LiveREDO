# 25LiveREDO
This is a Svelte+Vite project that redesigns the user interface for the 25Live scheduling system (https://25live.collegenet.com/pro/uc#!/home/dash) for the University of Cincinnati. This system is used by multiple colleges/universities and other organizations to schedule one-day events, such as classes and student hosted events. (To know more -> https://knowledge25.knowledgeowl.com/help/about-25live) A more pinpoint description is that this system is made only to schedule events and request resources for events, such as a projector. You wouldn't visit this website to sign up for an event. The redesign was made with students in mind and focuses on easibility of reserving a location. We surveyed and interviewed a small pool of people from the University of Cincinnati and some outside to account for in our decisionmaking.

## Data Unsecure
The website does not ask for your log in upon visiting the site and gives a guest user access to all events and location information hosted by the organization, which shouldn't be accessible by a guest user. However, it is not accessible for a logged-in user. Other colleges/universities that use 25Live require login to access the reservation system. The only other 25Live we found that did not was the University of Louisville. Because of that, this project redesign is the layout for a logged-in user shown in the picture below.

![Screenshot 2024-11-19 181854](https://github.com/user-attachments/assets/7c88d7d9-2368-4448-a7fa-65edc34ef0fe)

# Layout
On our main view, there are three components: eventform, list of rooms, and a list of the user's current events. The items in the top right are only there to simulate the original. We didn't include tasks because we didn't want to carryover any of 25Live's dreams of being a planner. 

![Screenshot 2024-11-19 182214](https://github.com/user-attachments/assets/998cfabd-e375-4dd8-9f8a-ba97ee441268)

Things we cutoff completely was reports, event drafts, and tasks. The tasks and reports were features that seemed to want to make 25live act as a pseudo planner, but considering how the website is used only for reservations they felt unnecessary. We also couldn't find anyone who considered those features, which for the most part were self-reports. Event drafts were something we considered unnessary because there didn't seem an important reason to allow the user to do that. The component that shows drafts puts them two sections: one where you are the scheduler and one where you are the requestor. Considering how you can't sign up for events, its a wonder why requester is a category and why they used that instead of participant.

## Event Form
There's a total of four forms that can be used to reserve a room on the original. We based our form primarily on what was called the express scheduling form, which asked for a name for the event, a start time, an end time, and would show the available rooms at that time and/or date in a dropdown menu. It also let you see the duration of the event. We theorize this was displayed for debugging purposes and just left in because there's a time limit you can reserve a room for. Since we couldn't formally view that information and see how it differentiated across different rooms, we did not implement that feature. If we were to continue working on this, we would put more research into the rooms time capacity and implement a time limit.

For error checking: we made sure an event wasn't being made before the current date, that the end time didn't go to the next day, and a location was selected.

https://github.com/user-attachments/assets/a39ae9e8-754f-4410-8b63-b7af8e773606

We decided to make the name optional because it was only viewable by the user for the most part. We only know one building that has little screens by the door for the study rooms that shows the reservations and it mattered. From our interviews, filling out the name rarely mattered because they didn't often have multiple reservations at a time and didn't look back previous events.

To look for a room, available rooms would immediately populate in the search component below it when a time slot was entered. Only after selecting a room, a popup will show asking you to verify the information for the reservation.

### Current Events
Any scheduled event will show up in the Current Events Component as their own component and any more events will be stacked below it. To the right of an event component is a cancel button, which will give you a popup asking for confirmation before deleting. There's no cancel event option on the original website.

https://github.com/user-attachments/assets/40c4413b-fa73-4b2c-8b3e-5f5084d09ba3

### Other forms
A more complicated form was labeled as an event wizard and was accessible in a link at the top right. We didn't include this - not just because we wanted to focus on the main page - because it looked geared for formal or big events. Among the students we interviewed, most just used it for study rooms or for an activity. This form asked for sponsors, comments, and included the option to attach documents. You could also put in a number for post and pre days. If we did decide to implement this form, we would've just let the user just make a reservation over a time period.

The component in this image are two of the "forms" and was cutoff for the redundancy of it. The top one is basically another version of the express scheduling but asks for the number of attendees and has additional filters in the dropdown for the available rooms, which is hard to see and work with in a dropdown. This also brings the question of why would you need the number of attendees.

![Screenshot 2024-11-19 173721](https://github.com/user-attachments/assets/51ace641-6393-4e76-a34d-0a32529d2fa3)

The bottom option is hard to call a form when it's just a searchbar to look up a location name. 

## List of Rooms
### Searching Issue
There is a lot of searching involved in the functionality of it which had filters for things people didn't really know about, especially when just trying to reserve one of the many study roooms. A big issue is there's no information displayed by default when searching which makes it difficult when you're not familiar with the rooms. Search components outside of location were not necessary because there is not any utility to them.

![Screenshot 2024-11-19 164833](https://github.com/user-attachments/assets/b9a64272-eac3-4be6-9a8d-ba7cbbc8e8b3)

Thus, we removed the starred searches and quicksearch components, especially events and organizations. Even resources is unnecessary because from what we found, they're equipment that's already located in the room and could be looked up when searching up a location. There's a lot of options in the search filters that confused people and many people avoid using it. Searching events is especially unnecessary considering people do not need to sign up for events. We couldn't find anyone who used these features either.

This led us to pushing the search and displaying the list of available rooms into one component. But for all the scattered and redundant features of the website, the most promising feature of the website is how immediate it is for the available rooms to show up when filling in the wanted time or/and date. From the start, we strongly wanted to be able demonstrate that in our redesign, and we did. 

### Functionality

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
