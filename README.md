# Vanilla Express API
This example project gives an idea of a possible project structure to build a simple API. In this example the database is returning in-memory mock data, but it could be swapped with a module that gather this information from a real database.

## Get started
In order to run this example, install the dependencies

```
npm install
```

then run

```
npm start
```

The server runs on `http://localhost:8080`

## API

### /stops/:routeId
Returns a list of stops given a route ID

### /busses/:routeId
Returns a list of busses (with current position) given a route ID

### /routes/:stopId
Returns a list of routes given a stop ID
