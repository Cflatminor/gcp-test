'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/" ,(req, res) => {
    res.send("github -> gcp -- app engine CI/CD test");
});

app.listen(port, () => {
    console.log("ready");
});
