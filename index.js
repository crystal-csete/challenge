require("dotenv").config();
const express = require("express");

// const server = require("./api/apiRoutes.js");

const apiRoutes = require("./api/apiRoutes");
const productRoutes = require("./products/productRoutes");

const server = express();

server.use("/api", apiRoutes);
server.use("/products", productRoutes);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** API on PORT ${port} ***\n`);
});
