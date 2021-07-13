# NodeJS Geocoding using Longitude and Latitude from Excel

This is a node script that helps you get location address using google map API. The script pulls all locations from the `test.xlxs` file located in the root directory and then sends a request to get the address based on the geocordinates. Once response is received, it writes the Latitude, Longitude and Address to a new Sheet in the same excel file.

## Installation
- Clone the project to your local machine
```bash
On terminal run:
git clone https://github.com/chrix95/nodejs-basic-setup.git
```
- Install all dependencies
```bash
On terminal run:
npm install
```

## Setup
- Copy the `.env.sample` to `.env` and set the following vital information
- Enter you Google Map Geocoding API KEY [Google Console](https://console.cloud.google.com/google/maps-apis/overview) <br> You might have to create a new project if you are coming here for the first time.
```bash
GOOGLE_MAP_API_KEY="YOUR_GOOGLE_MAP_GEOCODING_API_KEY"
```
- You need to add a billing account inorder to use the Google Map API, but not too worry, you have $300 to play with before you will be charged if your free fund get exhausted.

## Usage
- Start the application using the command below:
```bash
On terminal run:
npm start
```
- Open the `test.xlsx` and fill the sheet with sample Latitude and Longitude points
- Ensure you remove any other sheet that might be on the `test.xlsx` workbook especially `Sheet 2` (Because the default sheet to write the new result is `Sheet 2` of the workbook)
- Send a request to the URL below using [Postman](https://www.postman.com/downloads/)

## Contact
If you have any questions/feedback you can reachout to me via:
- [Email](engchris95@gmail.com)
- [Phone](+2348183780409)

## License

[MIT](https://choosealicense.com/licenses/mit/)