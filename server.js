// bring in express object
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// initialize middleware
// extended is apparently not part of .json but part of body-parser, I'll have to confirm this
app.use(express.json({ extended: false }));

// testing a default endpoint, send data to browser
app.get("/", (req, res) => res.send("API Running"));

// define routes - not sure if this HAS to be before the port connection, but that's where Brad has it
// we're keeping our API RESTful by ...
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log("Server started on ${PORT}"));
