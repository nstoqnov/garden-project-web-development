class FlowersService {
  constructor() {
    this.flowers = [
      { id: "1", name: "Rose", color: "Red" },
      { id: "2", name: "Lily", color: "White" },
      { id: "3", name: "Tulip", color: "Red" },
    ];
  }
  findAllFlowers() {
    return this.flowers;
  }
  findAllByColor(color) {
    return this.flowers.filter(
      (flower) => flower.color.toLowerCase() === color.toLowerCase()
    );
  }

  findById(id) {
    return this.flowers.find((flower) => flower.id === id);
  }

  create(flowerData) {
    const newFlower = {
      id: Date.now().toString(),
      name: flowerData.name,
      color: flowerData.color,
    };
    this.flowers.push(newFlower);
    return newFlower;
  }

  delete(id) {
    const initialLength = this.flowers.length;
    this.flowers = this.flowers.filter((flower) => flower.id !== id);

    return this.flowers.length < initialLength;
  }
}

module.exports = new FlowersService();
