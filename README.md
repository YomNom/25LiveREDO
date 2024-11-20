# 25LiveREDO https://25-live-redo.vercel.app/
This is a Svelte+Vite project that redesigns the user interface for the 25Live scheduling system (https://25live.collegenet.com/pro/uc#!/home/dash) for the University of Cincinnati. This system is used by multiple colleges/universities and other organizations to schedule one-day events, such as classes and student hosted events. (To know more -> https://knowledge25.knowledgeowl.com/help/about-25live) A more pinpoint description is that this system is made only to schedule events and request resources for events, such as a projector. You wouldn't visit this website to sign up for an event. The redesign was made with students in mind and focuses on easibility of reserving a location. We surveyed and interviewed a small pool of people from the University of Cincinnati and some outside to account for in our decision-making.

## Survey Results
The success of any platform lies in its ability to effectively and efficiently meet user needs. To evaluate how well 25Live College Net at the University of Cincinnati is serving its users, we carried out a feedback survey to identify common challenges, frustrations, and areas needing improvement. This survey focused on students and other users of the platform to understand their usage frequency and select participants for follow-up interviews. These interviews aim to delve deeper into the platform’s usability and gather insights on user-reported experiences.

![image](https://github.com/user-attachments/assets/c12066cd-c50a-4f56-b465-22b930f896dd)


## Data Unsecured
The website does not ask for your login upon visiting the site and gives a guest user access to all events and location information hosted by the organization, which shouldn't be accessible by a guest user. However, it is not accessible for a logged-in user. Other colleges/universities that use 25Live require login to access the reservation system. The only other 25Live we found that did not was the University of Louisville. Because of that, this project redesign is the layout for a logged-in user shown in the picture below.

![Screenshot 2024-11-19 181854](https://github.com/user-attachments/assets/7c88d7d9-2368-4448-a7fa-65edc34ef0fe)

## Design Sketches
The initial design and layout of the 25LiveREDO interface were conceptualized using Figma. These sketches provided a blueprint for the user-friendly redesign and guided the development process to ensure a seamless user experience.
You can view our Figma sketches here: https://www.figma.com/design/TEEp2ZRlAZX6kpkigvbFUI/25Live?node-id=0-1&t=TVDlEgaWrWO6NKoO-1

## Layout
On our main view, there are three components: eventform, list of rooms, and a list of the user's current events. The items in the top right are only there to simulate the original. We didn't include tasks because we didn't want to carryover any of 25Live's dreams of being a planner. 

![Screenshot 2024-11-19 182214](https://github.com/user-attachments/assets/998cfabd-e375-4dd8-9f8a-ba97ee441268)

Things we cutoff completely was reports, event drafts, and tasks. The tasks and reports were features that seemed to want to make 25live act as a pseudo planner, but considering how the website is used only for reservations they felt unnecessary. We also couldn't find anyone who considered those features, which for the most part were self-reports. Event drafts were something we considered unnessary because there didn't seem an important reason to allow the user to do that. The component that shows drafts puts them two sections: one where you are the scheduler and one where you are the requestor. Considering how you can't sign up for events, its a wonder why requester is a category and why they used that instead of participant.

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

## List of Rooms
### Searching Issue
There is a lot of searching involved in the functionality of it which had filters for things people didn't really know about, especially when just trying to reserve one of the many study roooms. A big issue is there's no information displayed by default when searching which makes it difficult when you're not familiar with the rooms. Search components outside of location were not necessary because there is not any utility to them.

![Screenshot 2024-11-19 164833](https://github.com/user-attachments/assets/b9a64272-eac3-4be6-9a8d-ba7cbbc8e8b3)

Thus, we removed the starred searches and quick search components, especially events and organizations. Even resources is unnecessary because from what we found, they're equipment that's already located in the room and could be looked up when searching up a location. There are many options in the search filters that confuse people and many people avoid using it. Searching for events is especially unnecessary considering people do not need to sign up for events. We couldn't find anyone who used these features either.

This led us to push the search and displaying the list of available rooms into one component. But for all the scattered and redundant features of the website, the most promising feature of the website is how immediate it is for the available rooms to show up when filling in the wanted time or/and date. From the start, we strongly wanted to be able demonstrate that in our redesign, and we did. 

### Functionality
## Current Availabilities section 
The Current Availabilities section, the main purpose of this section is to clearly list out all available locations to reserve to the user, the section includes a filter that allows the user to filter by building's name and categories. Each row of the locations shows clearly the location, and purposes. The top left of the section will show how many locations are available according to what filter the user applies.
<img width="1435" alt="Screen Shot 2024-11-19 at 4 26 14 PM" src="https://github.com/user-attachments/assets/a959d356-5f30-45ff-a494-bf67226a4d92">

<img width="1374" alt="Screen Shot 2024-11-19 at 4 29 41 PM" src="https://github.com/user-attachments/assets/4d5bfc19-58f0-4871-9518-e3f5e90788c8">

Each room name is made to be clickable, once the user clicks on the name of a room, a popup will show all the details of the selected room, including a timeslot of when the room is available through a calendar.
        
<img width="730" alt="Screen Shot 2024-11-19 at 4 31 18 PM" src="https://github.com/user-attachments/assets/0873f19d-6ad4-4cde-8e2b-f1c300f32236">

A Direction tab is also provided immediately below the calendar, providing the user with the precise location of the room, and allowing for better navigation.

<img width="711" alt="Screen Shot 2024-11-19 at 4 31 53 PM" src="https://github.com/user-attachments/assets/a38cde65-5e63-45fd-aa3f-13e454e43727">
        
## Room Information Popup

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
