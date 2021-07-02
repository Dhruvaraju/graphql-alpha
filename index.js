const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Responding from server");
});
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
