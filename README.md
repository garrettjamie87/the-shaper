## Description

A database platform for surf boards,where users can select a pre existing board or create their own from scratch. All boards can be customised via the platform and are then made by hand, to order. 

## User Stories

- **Sign Up** - Users should be able to sign up, It's free and helps users feel like they're involved. In our case, the  sign up helps to build their profile.

- **Log In** - Users should be able to log in so they can see their profile, see and their preferences. 

- **Log Out** - Users should be able to end the session and feel secure that their details are safe and private.

- **Homepage** - Users should be able to access  the homepage  and start the process of customizing their surfboard or choosing from a preselected one. 

- **Display results** - Users should be able to see their updated surfboard as they move along the process. 

- **Edit User Profile** - Users should be able to edit and update their profiles.

- **Delete** - Users should be able to delete their custom surfboard. 

  

  

## Server Routes

| Method     |          Route           |                         Description                          |                       Request/Body                       |
| :--------- | :----------------------: | :----------------------------------------------------------: | :------------------------------------------------------: |
| ~~`GET`~~  |         ~~`/`~~          |       ~~Main page route. Renders home `index` view.~~        |                                                          |
| ~~`GET`~~  |       ~~/signup~~        |             ~~Renders `auth/signup` form view.~~             |                                                          |
| ~~`POST`~~ |      ~~`/signup`~~       | ~~Sends the Sign Up info to the server and creates user in the DB. Renders `auth/signup` view.~~ | ~~{name, email, password, height, weight, profile pic}~~ |
| ~~`GET`~~  |       ~~`/login`~~       |             ~~Renders `auth/login` form view.~~              |                                                          |
| `GET~~`~~  |      ~~`/logout`~~       |     ~~Logs the user out and redirects to `index` view.~~     |                                                          |
| ~~`POST`~~ |       ~~`/login`~~       | ~~Sends Log In form data to the server and redirects to homepage.~~ |                  ~~{email, password}~~                   |
| ~~`GET`~~  |  ~~`/list-of-boards`~~   |            ~~Renders the list of boards boards.~~            |                                                          |
| ~~`GET`~~  |     ~~/:ID/detail~~      |          ~~renders the details of the surfboards~~           |                   ~~{click a board}~~                    |
| ~~`POST`~~ |     ~~/:ID/detail~~      | ~~Update the userDB  with surfboard ID (with button to buy and then update )~~ |              ~~{click to  buy or create}~~               |
| ~~`GET`~~  |  ~~/create-surfboard~~   | ~~Render the form to create their own board (access the page from button 'create', that is in /:ID/detail)~~ |                                                          |
| ~~`POST`~~ | ~~`/create`-surfboard`~~ |     ~~Users can create the their own surfboard (form)~~      |            ~~{color, material, length etc}~~             |
| ~~`GET`~~  |        ~~/order~~        |                ~~renders the purchase page~~                 |                                                          |
| `GET`      |         :ID/edit         | form where the user can edit their own creation from earlier |                                                          |
| `POST`     |         :ID/edit         |            if they have changes they can send it             |                                                          |
| `DELETE`   |        /id/delete        |      Deletes the existing board from the current user.       |                                                          |
| `GET`      |         /profile         | User can view profile (display info of user amd their collection) with edit button |                                                          |
| `GET`      |      /edit-profile       |             EDIT PROFILE (show form with input)              |                                                          |
| `POST`     |      /edit-profile       |               UPDATE (updates the user model)                |                                                          |





## Backlog ##

1. Users can select a time when they want to go and build their board with the shaper. 
2. Choose to make your board yourself through classes.
3. Make customisation more in depth with more options. 


const surfBoardSchema = new Schema ({
     
       
            author: { type: Schema.Types.ObjectId, ref: "User", default: null },
            Color:{type: String, enum: ["red","white", "black"]},
            Length:{type: String, enum: ["option1","option2", "option3"]},
            Width:{type: String, enum: ["rounded","square", "triangle"]},
            Thickness:{type: String, enum: ["thin","medium", "fat"]},
            Nose-Shape:{type: String, enum: ["rounded","square", "triangle"]},
            Tale-Shape:{type: String, enum: ["rounded","square", "triangle"]},
            Level-of-Board:{type: String, enum:["SchoolBoy", "Happy Medium", "Absolute-boss"]},
            Surfboard Name:{type: String},
            Image:{type: String},

})

