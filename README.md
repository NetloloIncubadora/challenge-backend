installing dependencies
- npm install

to run tests
- npm test

to start the api
- npm start


with the app running make a get request to:
http://localhost:3000/offer/{amounts}/{sort}

example:
http://localhost:3000/offer/0.6123,0.3123/asc

the api returns the calculated price filtered by amount and ordered by ascending or descending