const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const city = url.parse(request.url, true).query?.city;
  const locationMock = locationsMock[city?.toLowerCase()];

  if (!locationMock) {
    return response.status(404).json({ message: "Location not found" });
  }

  response.json(locationMock);
};
