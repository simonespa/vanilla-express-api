const database = require('../database');

module.exports = (request, response) => {
  const { stopId } = request.params;
  const routesByStopId = database.getRoutesByStopId(stopId);
  response.status(200).json(routesByStopId);
};
