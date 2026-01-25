import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ ROOT ROUTE (THIS FIXES THE ERROR)
app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});


app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
