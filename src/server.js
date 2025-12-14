const express = require("express");
const flowersController = require("./controller/flowersController");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/flowers", (req, res) => flowersController.getAllFlowers(req, res));

app.get("/flowers/color/:color", (req, res) =>
  flowersController.getAllFlowersByColor(req, res)
);

app.get("/flowers/:id", (req, res) => flowersController.getFlower(req, res));

app.post("/flowers", (req, res) => flowersController.addFlower(req, res));

app.delete("/flowers", (req, res) => flowersController.deleteFlower(req, res));

app.listen(PORT, () => {
  console.log(`Garden app listening at http://localhost:${PORT}`);
});
