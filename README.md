# 25LiveREDO
This is a Svelte+Vite project that redesigns the user interface for the 25Live scheduling system (https://25live.collegenet.com/pro/uc#!/home/dash) for the University of Cincinnati. This system is used by multiple colleges/universities and other organizations to schedule one-day events, such as classes and student hosted events. (To know more -> https://knowledge25.knowledgeowl.com/help/about-25live) A more pinpoint description is that this system is made only to schedule events and request resources for events, such as a projector. You wouldn't visit this website to sign up for an event. 

## Issues with 25Live for the University of Cincinnati
The website does not ask for your log in upon visiting the site and gives a guest user access to all events and location information hosted by the organization, which shouldn't be accessible by a guest user. However, it is not accessible for a logged-in user. It's difficult to see whether this issue is with the system itself or the organization using it, because when visiting other Universities 25Live it shows completely different layouts. Looking at the 25live for the University of Lousville, all that information is displayed automatically. However, when visiting 25live for the Univeresity of Dayton, you are asked to log in before being given access to the reservation/scheduling system (https://shibidp.udayton.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1). Because of that, this project primarily redesigns the layout for a logged-in user.

The influx of information presented to the user
The search function is used for everything. 
 On each page, there's an influx of unnecessary information because it's been setup for students and staff. Although I mentioned classes, an room can only be reserved for one day. 


## Functionalities introduction

 Part 1 -- Current Availabilities section 
          For The current Availabilities section, the main purpose of this section is to clearly list out all available locations to reserve to the user, the section includes a filter that allows the user to filter by building's name and catagories. each row of the locations shows clearly the location, purpose. the top left of the section will show how many locations available accordings to what filter the user applies.
        <img width="1435" alt="Screen Shot 2024-11-19 at 4 26 14 PM" src="https://github.com/user-attachments/assets/a959d356-5f30-45ff-a494-bf67226a4d92">
        <img width="1374" alt="Screen Shot 2024-11-19 at 4 29 41 PM" src="https://github.com/user-attachments/assets/4d5bfc19-58f0-4871-9518-e3f5e90788c8">

        resources and max capacity of the respective room. Each room name is made to be clickable, once the user clicks on the name of a room, a popup will show all the details of the selected room, including a timeslot of when the room is available through a calender.
        
        <img width="730" alt="Screen Shot 2024-11-19 at 4 31 18 PM" src="https://github.com/user-attachments/assets/0873f19d-6ad4-4cde-8e2b-f1c300f32236">
       A Directions tab is also provided immediately below the calender, providing the user with the precise location of the room, allowing for better Navigation.
        <img width="711" alt="Screen Shot 2024-11-19 at 4 31 53 PM" src="https://github.com/user-attachments/assets/a38cde65-5e63-45fd-aa3f-13e454e43727">
