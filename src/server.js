const express = require('express');
const stopsByRouteId = require('./controllers/stopsByRouteId');
const bussesByRouteId = require('./controllers/bussesByRouteId');
const routesByStopId = require('./controllers/routesByStopId');

const app = express();
const port = 8080;

// list of stops given a route
app.get('/stops/:routeId', stopsByRouteId);
// list of busses (with current position) on a certain route
app.get('/busses/:routeId', bussesByRouteId);
// list of routes that serve a certain stop
app.get('/routes/:stopId', routesByStopId);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
