const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../utils/fileHandler");

router.post("/", (req, res) => {
  const data = readData();
  const newProduct = {
    id: Date.now(),
    ...req.body
  };
  data.products.push(newProduct);
  writeData(data);
  res.status(201).json({ message: "Product added", product: newProduct });
});

module.exports = router;
