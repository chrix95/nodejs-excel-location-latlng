const sendRequest = require("../functions");

const getLocation = async (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    // send request to get the cordinate name
    const response = await sendRequest.getGeoLocation(
      array[index].Latitude,
      array[index].Longitude
    );
    if (response.status == "OK") {
      array[index].Location = response.results[1].formatted_address;
    } else {
      array[index].Location = "";
    }
    result = [...result, array[index]];
  }
  return result;
}

module.exports = {
  getLocation
};
