const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../utils/fileHandler");

// CREATE ORDER
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const data = readData();

  const product = data.products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  data.orders.push(order);
  writeData(data);

  res.status(201).json({ message: "Order placed", order });
});

module.exports = router;
