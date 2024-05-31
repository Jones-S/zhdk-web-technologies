const dotenv = require("dotenv");
dotenv.config();
console.log(`Your client id is ${process.env.SPOTIFY_CLIENT_ID}`);
console.log(`Your secret is ${process.env.SPOTIFY_CLIENT_SECRET}`);

const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.use("/", express.static(__dirname + "/examples/api/02-spotify-env/"));

app.listen(port, function () {
  console.log("Server started at http://localhost:" + port);
  console.log("listening");
});

// Route to serve environment variables
app.get("/env", (req, res) => {
  res.json({
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  });
});
