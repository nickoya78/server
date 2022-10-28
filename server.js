const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port 3000");
});
