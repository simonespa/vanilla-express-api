function getStopsByRouteId(routeId) {
  return [
    {
      stopId: 'stop1',
      name: 'Name 1'
    },
    {
      stopId: 'stop2',
      name: 'Name 2'
    },
    {
      stopId: 'stop3',
      name: 'Name 3'
    }
  ];
}

function getBussesByRouteId(routeId) {
  return [
    {
      busId: 'bus1',
      gps: {
        latitude: 51.508835,
        longitude: -0.25045
      }
    },
    {
      busId: 'bus2',
      gps: {
        latitude: 11.508835,
        longitude: -3.25045
      }
    },
    {
      busId: 'bus3',
      gps: {
        latitude: -1.508835,
        longitude: -2.28845
      }
    },
    {
      busId: 'bus4',
      gps: {
        latitude: -10.508835,
        longitude: 11.25045
      }
    }
  ]
}

function getRoutesByStopId(stopId) {
  return [
    {
      routeId: 'route1',
      stops: [
        {
          stopId: 'stop2',
          name: 'Name 2'
        }
      ]
    }
  ]
}

module.exports = {
  getStopsByRouteId,
  getBussesByRouteId,
  getRoutesByStopId
}
