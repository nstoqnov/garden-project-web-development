const express = require("express");
const flowersController = require("./controller/flowersController");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/flowers", (req, res) => flowersController.getAllFlowers(req, res));

app.listen(PORT, () => {
  console.log(`Garden app listening at http://localhost:${PORT}`);
});
