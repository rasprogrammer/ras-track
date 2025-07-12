const express = require("express");

const cors = require("cors");
const compression = require("compression");

const cookieParser = require("cookie-parser");

const coreAuthRouter = require("./routes/coreRotues/coreAuth");

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(compression());


app.get('/', (req, res) => {
    res.end("<Homepage>");
})

app.use('/api', coreAuthRouter);

module.exports = app;