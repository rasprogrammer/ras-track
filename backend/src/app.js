const express = require("express");
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.end("<Homepage>");
})

module.exports = app;