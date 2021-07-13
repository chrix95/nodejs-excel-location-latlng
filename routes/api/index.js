const express = require("express");
const apiRouter = express.Router();
const utilsController = require("../../controller/utils");
const setRequest = require("../../functions");
const fs = require("fs");

const reader = require("xlsx");

apiRouter.get("/", async (req, res) => {
  res.status(200).send({ message: "Welcome to the API root route" });
});

apiRouter.get("/geolocation", async (req, res) => {
  const file_path = `test.xlsx`;
  
  let data = [];

  // Reading our test file
  const file = reader.readFile(file_path);
  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      data.push(res);
    });
  }

  // send request to get the cordinate name
  await utilsController.getLocation(data)
  
  const ws = reader.utils.json_to_sheet(data);
  reader.utils.book_append_sheet(file, ws, "Sheet2");
  // Writing to our file
  reader.writeFile(file, file_path);

  // Output
  res.send({ message: "success", data });
});

module.exports = {
  apiRouter,
};
