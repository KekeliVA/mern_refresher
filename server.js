// bring in express object
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// testing a default endpoint, send data to browser
app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log("Server started on ${PORT}"));
