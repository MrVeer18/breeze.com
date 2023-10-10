var express = require("express");
var router = express.Router();
var axios = require("axios");

apiKey = "e332b99b81f941b89e1113016230310";

/* GET users listing. */
router.get("/", async (req, res) => {
  const city = req.query.city;
  try {
    const currentWeather = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json?key=" +
        apiKey +
        "&q=" +
        city +
        "&days=7"
    );
    res.json(currentWeather.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

// const response = await fetch(uri, {
//   method: 'GET',
//   mode: 'cors',
//   headers: { 'Content-Type': 'application/json' }
// }).then(res => res.json());

// return res.json(response);
