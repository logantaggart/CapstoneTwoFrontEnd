Cryptic <br />

Application Deployment
[Link To Deployed Application](http://half-side.surge.sh/) <br /> <br />
-Deployed Frontend using Surge <br />
-Deployed Backend using Heroku <br /> <br />

Github Backend
[Link to Github Cryptic Backend](https://github.com/logantaggart/CapstoneTwoBackEnd) <br /> <br />


Description: <br /> <br />
Cryptic is a web application that allows users to search and find the latest information and statistics for the cryptocurrency of their choosing. Users are also able to save a cryptocurrency to their watchlist where they can later view the statistics of the cryptocurrency at the time that it was added to their personal watchlist. From there, Cryptic users can sort their watchlist in two ways. One, they can sort by alphabetical order, date added, or statistical data such as: price, market cap, and volume. Two, they can choose if they would like their watchlist presented in an ascending order or a descending order. In addition, users are able to view information on their Cryptic account through the profile page where they can view the username, email, and first and last name that are associated with the account. <br /> <br />

Features: <br />
- Account System <br /> 
  I wanted to make a personalized experience for each specific user and to implement some of the features listed below this was the best method.
- Searchbar for Cryptocurrency Information <br />
  This is the backbone of the application that allows users to find information on the different cryptocurrencies.
- Dropdown Input to choose fiat currency that cryptocurrency statistics will be converted to <br />
  I also wanted to make Cryptic an application that many people could use, so I added the option for a user to change the conversion currency between the globe's top 20 fiat currencies.
- Watchlist System <br />
I built Cryptic to be a tool that cryptocurrency investors could use, and this expands upon that concept. I wanted to add a way for users to view the trends of many cryptocurrencies and some of the historical data for those cryptocurrency projects.
- Sorting Form to sort user's watchlist data <br />
I knew that a watchlist could get very long and cluttered, so I wanted to add an organizational tool that would allow a user to sort their list by a number of different metrics. <br /> <br />

Tests: <br /> <br />
All tests for Cryptic are located in the folders that are containing the files that they are testing. For the backend these tests are ran using the command jest in the terminal. For the frontend, tests are ran using the terminal command npm test. <br /> <br />

User Flow: <br /> <br />
The user will either be presented with the option to go to the sign in or create account page if they are not logged in or signed up, or a home page if they are signed in where they can search for information on a cryptocurrency and add it to their watchlist, or they can go to their account information page or watchlist where they can then sort the list by a few different metrics. <br /> <br />

API Used: <br /> <br />
[CoinMarketCap API](https://coinmarketcap.com/api/) <br />
The CoinMarketCap API limits the number of requests made to their API to 333 per day. <br /> <br />

Tech Stack Used: <br />
- Javascript
- NodeJS
- Express
- React
- React Router
- SQL
- PostgreSQL
- CSS
- Bootstrap <br /> <br />

Planned Features: <br />
- Add a button to remove cryptocurrencies from a user's watchlist
- Create a button on each cryptocurrency in a watchlist to get updated information and statistics on the selected cryptocurrency
- Add a profile edit form to allow a user to make changes to the information that is linked to their account
