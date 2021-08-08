##i have used weatherapi.com API

##########
SERVER
##########
I have created middleware using express node to consume public weather API calls and i have created/exposed routes to use them for UI.

as a best practice i have created folder structure to maintain code

i have used axios to communicate public weather APIs

i have created "current/:city" route to get current weather conditions

i have created "/forecast/:city" route to get 24hrs forecast conditions

i have created auto search to get cities "/search/:city"

### STEPS to run locally
#1 cd to server folder
#2 run command "npm install" to install dependencies
#3 run command "npm run start" to start the server
api will be running at http://localhost:3080


##########
UI
##########
i have created rich user interface using vuejs

as a best practice i have created folder structure to maintain code

i have created http helper to communicate with backend

i have created service to keep all the methods in single file 

i have created auto search component to fetch cities from user input to select see the weather forecast

i am diplaying 24 hrs forecast on page load based on system ip

user has the capability to enter minimum 3char to search by city name and then auto complete will disply the matched cities as dropdown and then user can choose the city to see 24hrs forecast

### STEPS to run locally
#1 cd to server folder
#2 run command "npm install" to install dependencies
#3 run command "npm run start" to start the server
application will be running at http://localhost:8080

##########
GIT URLS
https://github.com/dasari234/weather-app-server
https://github.com/dasari234/weather-app-client

### 
Visual out link
https://weather-app-client-166ce.web.app/
