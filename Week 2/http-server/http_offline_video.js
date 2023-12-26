const express = require("express");
const app = express();

const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false
      }
    ]
  }
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy
  });
  res.json({
    msg: "Done"
  });
});

app.put("/", function (req, res) {
  // Your PUT route logic here
});

app.delete("/", function (req, res) {
  // Your DELETE route logic here
});

app.listen(4000);

