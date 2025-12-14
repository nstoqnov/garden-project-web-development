const flowersService = require("../service/flowersService");

class FlowersController {
  getAllFlowersByColor(req, res) {
    const color = req.params.color;

    if (!color) {
      return res.status(400).json({ message: "Color parameter is required" });
    }

    const flowers = flowersService.findAllByColor(color);
    res.status(200).json(flowers);
  }
  getAllFlowers(req, res) {
    const flowers = flowersService.findAllFlowers;
    res.status(200).json(flowers);
  }
  getFlower(req, res) {
    const id = req.params.id;
    const flower = flowersService.findById(id);

    if (!flower) {
      return res.status(404).json({ message: "Flower not found" });
    }

    res.status(200).json(flower);
  }

  addFlower(req, res) {
    const { name, color } = req.body;

    if (!name || !color) {
      return res.status(400).json({ message: "Name and color are required" });
    }

    const newFlower = flowersService.create({ name, color });
    res
      .status(201)
      .json({ message: "Flower added successfully", flower: newFlower });
  }

  deleteFlower(req, res) {
    const id = req.query.id;

    if (!id) {
      return res
        .status(400)
        .json({ message: "Flower ID query parameter is required" });
    }

    const isDeleted = flowersService.delete(id);

    if (isDeleted) {
      res
        .status(200)
        .json({ message: `Flower with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: "Flower not found" });
    }
  }
}

module.exports = new FlowersController();
