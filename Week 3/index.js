const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.query.username;
  const password = req.query.password;
  const kidneyId = req.query.kidneyId;

  if (username !== "rohith" || password !== "password") {
    res.status(400).json({ "msg": "something wrong with your inputs" });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ "msg": "something wrong with your inputs" });
    return;
  }
  res.json({
    "msg": "Your kidney is fine",
  });
});

app.listen(3010, () => {
  console.log("Server is running on port 3010");
});
