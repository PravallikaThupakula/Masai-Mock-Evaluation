const express = require("express");
const router = express.Router();
router.get("/allorders", (req, res) => {
    const data = readData();
    res.json({
      count: data.orders.length,
      orders: data.orders.map(o => o)
    });
  });
  router.get("/cancelled-orders", (req, res) => {
    const data = readData();
    const cancelled = data.orders.filter(o => o.status === "cancelled");
    res.json({ count: cancelled.length, orders: cancelled });
  });
  router.get("/shipped", (req, res) => {
    const data = readData();
    const shipped = data.orders.filter(o => o.status === "shipped");
    res.json({ count: shipped.length, orders: shipped });
  });
  router.get("/total-revenue/:productId", (req, res) => {
    const data = readData();
    const product = data.products.find(p => p.id == req.params.productId);
  
    if (!product) return res.status(404).json({ message: "Product not found" });
  
    const totalRevenue = data.orders
      .filter(o => o.productId == product.id && o.status !== "cancelled")
      .reduce((sum, o) => sum + o.quantity * product.price, 0);
  
    res.json({ productId: product.id, totalRevenue });
  });
  router.get("/alltotalrevenue", (req, res) => {
    const data = readData();
  
    const totalRevenue = data.orders
      .filter(o => o.status !== "cancelled")
      .reduce((sum, o) => {
        const product = data.products.find(p => p.id === o.productId);
        return sum + o.quantity * product.price;
      }, 0);
  
    res.json({ totalRevenue });
  });
 
module.exports = router;
