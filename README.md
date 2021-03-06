# Weather By Numbers
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>

## Installation

- Clone the repo
- In a terminal, run `npm install`
- To start the project in Development mode, run `npm run start`
- It is now running at http://localhost:3000/

## Available scripts / commands

- `npm run start` - Starts in development mode
- `npm run build` - Creates a build version
- `npm run deploy` - Deploys to github pages ( first add "homepage": "https://fermentedcat.github.io/weather-by-numbers/" to package.json )

## Deployment

[Weather By Numbers](https://fermentedcat.github.io/weather-by-numbers/)

# Framework and architectural choices

## React

I have chosen React for this project as it's quick and easy to use and suits the project's needs.

## State management with useContext

Alert snackbars are managed through `SnackBarContext`, via `useSnackbars` hook for easier access.


## Styling with Sass

Since node-sass is deprecated, I am using Dart Sass. I have chosen Sass modules over styled-components because I'm more familiar with it and I don't see a need for additional programmatical styling.

## Animations

- maybe in the future

## Code organisation

Code is organized into the following folders:

- /api - data fetching from SMHI weather API
- /components - reusable components
- /utils - contexts, hooks and reusable functions, such as `getFormattedDate`

---

## SMHI weather API
API url (example): `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.819552/lat/55.433993/data.json`

### Corner points (lon, lat)

- SW	2.250475, 52.500440
- SE	27.348870, 52.547483
- NE	37.848053, 70.740996
- NW	-8.541278, 70.655722

### SMHI weather API params

- t - value: temperature in celcius
- validTime - date and hour of the forecast
- Wsymb2 - value: symbol ref, 1 - 27

---

# Todo

## Backlog / wishlist

- show current date on the side if it has no 12 o'clock forecast
- animate reveal of forcast cards
- fetch location name of searched coordinates
- save searches in localstorage
- show previous searches
- click prevous search to fetch again
- hide form after search
- info symbol inside input field to show SMHI API searchable coordinates

## Cred

<a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by iconixar - Flaticon</a>
