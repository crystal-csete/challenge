require("dotenv").config();

// const express = require("express");

// const apiRoutes = require("./api/apiRoutes");

const server = require("./api/apiRoutes.js");

// server.use("/users", apiRoutes);
// server.use("/races", apiRoutes);
// server.use("/villians", apiRoutes);

// server.use("/", (req, res) => res.send("API up and running!"));

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** API on PORT ${port} ***\n`);
});
