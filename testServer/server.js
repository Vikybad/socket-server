const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const nplResource = require("./nplResource")

app.use(cors());

app.use(jsonParser);
app.use("/npl", nplResource)




const port = 8076;
http.listen(port, function () {
    console.log("Server is listening to port- " + port);
});


