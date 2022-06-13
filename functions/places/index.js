const { mocks, addMockImage } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const location = url.parse(request.url, true).query?.location;
  const mockLocation = mocks[location];

  if (!mockLocation) {
    return response.status(404).json({ message: "Restaurants not found" });
  }

  mockLocation.results = mockLocation.results.map(addMockImage);

  response.json(mockLocation);
};
