const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 4000;
const dbConnect = require("./dbConnect");
const app = express();
const userRoutes = require("./routes/user");
const handleRoutes = require("./routes/handleUser");

// Database connection
dbConnect();

app.use(cors());
app.use(bodyParser.json());
// Routes
app.use("/api", handleRoutes);
app.use("/api", userRoutes);

// Server Connection
const server = app.listen(port, () => {
  console.log("Server is listening");
});
