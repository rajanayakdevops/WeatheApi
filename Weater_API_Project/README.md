# Weather Now 🌤️

**Weather Now** is a modern, interactive weather application built using **React** and styled with **Bootstrap**. It provides users with real-time weather information for any city worldwide, combining both functional data and a visually appealing interface. The application uses the **Open-Meteo API** to fetch current weather conditions, daily forecasts, and hourly forecasts, ensuring users stay informed about short-term and upcoming weather patterns.

## Features

- **Current Weather:**  
  Displays the current temperature, wind speed, humidity, and precipitation for the selected city. A dynamic icon and background change according to the weather, making the experience more engaging.

- **Daily Forecast:**  
  Shows a 7-day forecast including maximum and minimum temperatures, along with weather icons that represent each day's conditions.

- **Hourly Forecast:**  
  Provides an 8-hour breakdown of temperature and weather, with icons changing according to temperature ranges. Time is displayed in 12-hour format with AM/PM for easy readability.

- **Dynamic Visuals:**  
  Background images and icons update automatically based on weather conditions and temperature ranges, creating a lively and intuitive interface.

- **Search Functionality:**  
  Users can search for any city globally. The app validates the input and displays an alert if the city is not found.

- **Responsive Design:**  
  Built using Bootstrap and CSS modules to ensure a clean layout that works across devices of different sizes.

## Usage

1. Enter the name of a city in the search box.
2. Click the search button to fetch weather data.
3. View current conditions, daily forecast, and hourly forecast for the city.
4. The interface updates dynamically with appropriate icons and backgrounds.

## Deployment

The application is hosted using **GitHub Pages**, which makes it easy to deploy and update:

1. Make changes to your local repository.
2. Stage and commit your changes:
   
   git add .
   git commit -m "Your commit message"

3. Push changes to GitHub:
   git push origin main

4. Run the deployment command to update the live website:

   npm run deploy


