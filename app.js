const express = require('express');
const app = express();
require('dotenv').config({path: __dirname + '/.env'})
const { router } = require('./routes/index');
const { apiRouter } = require('./routes/api/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});