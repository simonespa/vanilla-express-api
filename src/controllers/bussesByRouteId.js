const database = require('../database');

module.exports = (request, response) => {
  const { routeId } = request.params;
  const bussesByRouteId = database.getBussesByRouteId(routeId);
  response.status(200).json(bussesByRouteId);
};
