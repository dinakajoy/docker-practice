require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5005;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/dockerdb";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Hello from Express & MongoDB Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
