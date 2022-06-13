const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;

  if (mock === "true") {
    const locationMock = locationsMock[city?.toLowerCase()];

    if (!locationMock) {
      return response.status(404).json({ message: "Location not found" });
    }

    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => response.json(res.data))
    .catch((err) => response.status(400).json({ message: err?.message }));
};
