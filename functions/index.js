const { instance } = require("./request");

const getGeoLocation = async (lat, lng) => {
    try {
        const response = await instance.get(`${process.env.GOOGLE_MAP_BASE_URL}geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.GOOGLE_MAP_API_KEY}`);
        return { status, data } = response.data;
    } catch (error) {
        return {
            "status": "error"
        }
    }
}

module.exports = {
    getGeoLocation
}