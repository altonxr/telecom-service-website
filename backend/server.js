require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Telecom API with Sequelize is running ✅"));

app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");
  } catch (err) {
    console.error("DB connection error:", err);
  }
});
