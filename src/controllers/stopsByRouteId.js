const database = require('../database');

module.exports = (request, response) => {
  const { routeId } = request.params;
  const stopsByRouteId = database.getStopsByRouteId(routeId);
  response.status(200).json(stopsByRouteId);
};
