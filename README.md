# Adam-Sinsua-Mini-Project

React-Redux, ReduxJS Toolkit, Axios

This project is about posting data to an api: "https://reqres.in/api/users", and then display the response data to the UI. It also features react-redux for easy manipulation of states and data.

Additional feature: Delete function: allows the user to delete a user from the array.

## Features

* Webpack for overall bundling
* React.js library for web app development
* React-router-dom package for multiple page routing
* React-redux package for state management
* React-thunk package for redux's api consumption
* Redux-persist for redux data persistency
* React material ui carousel
* Material UI for fast and beautiful UIs
* Axios package for api consumption
* Lodash for javascript's methods extensions
* Prop-types for static typing

What this project does?
This project is themed around the concept of Soccer/Football.

This project is about creating a website where it has:
* An About page with carousel and video. It has a card component where it will display a brief history about the Premier League of football. It will have a carousel displaying 3 different images of premier league moments. And a video where it will play a video about the Top Ten Epic Moments of Premier Leauge.

* A contact page wth google maps for showing the location of the Geco Singapore. A card component for displaying the the email and another for the contact number. A feedback submission form where it sends the submission to the feedBackData reducer.

* A popularplayer page where it retrieves data from this api "https://livescore6.p.rapidapi.com/" using the getDataAPI reducer and stores it in the playerData reducer. It will then retrieve the player data from the playerData reducer and display it on the page.

* A Dashboard page where it has two tab panels: form page and scorepage. 
  **Form page is where it retrieves the name of players from the playerData reducer and displays it in a select component and allows the admin to add scores     to them by way of a textfield set up as a stepper. It also has a validation where it will return an error whenever the admin will submit the score           without a player name or when the admin sends a score less than or equal to zero.
  **Scorepage tabpanel where it displays the list of players from the playerData reducer after retrieveing it and shows the added scores from the Form tab of     the dashboard page.

## Run Locally

Download the repository

Go to the project directory

Install dependencies(npm):

```bash
  npm install
```

Start the webpack development server(npm):

```bash
  npm run serve
```

Build your work(npm, target ES6)

```bash
  npm run build
```

## Folder Structure

Folder name is self explanatory

    src
    ├── ""
    ├── assets───├──Basketball_pics
    |            ├──Premier_League_pics
    |
    └── modules───|
                  ├──Contact───├──component
                  |            ├──container
                  |
                  ├──Dashobard───├──component
                  |              ├──container
                  |              
                  ├──PopularPlayer───├──component              
                  |                  ├──container
                  |
                  ├──slices
                  
                  
## Documentation

[React.JS](https://reactjs.org/docs/getting-started.html)  
[React-Redux](https://react-redux.js.org/introduction/getting-started)
[Axios](https://axios-http.com/docs/intro)

## Authors

- [@ADAMSINSUAT](https://github.com/ADAMSINSUAT)
