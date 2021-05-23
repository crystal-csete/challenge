const express = require("express");
const helmet = require("helmet");

const Products = require("../data/productdb.js");

const server = express();

server.use(helmet());
server.use(express.json());

// Products endpoints below

server.get("/", (req, res) => {
  Products.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch(() => {
      res.status(500).json({
        errorMessage: "The products info could not be retrieved.",
      });
    });
});

server.get("/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        res
          .status(404)
          .json({ message: "The product with that id does not exist." });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "The product info could not be retrieved." });
    });
});

server.post("/", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and price for the product." });
  } else {
    Products.insert(req.body)
      .then((product) => {
        res.status(201).json(product);
      })
      .catch(() => {
        res.status(500).json({
          errorMessage:
            "There was an error while saving the product to the database.",
        });
      });
  }
});

server.delete("/:id", (req, res) => {
  Products.remove(req.params.id)
    .then((count) => {
      if (count && count > 0) {
        res.status(200).json({ message: "The product was deleted." });
      } else {
        res
          .status(404)
          .json({ message: "The product with that id does not exist." });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "The product could not be removed." });
    });
});

server.put("/:id", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and price for the product." });
  } else {
    Products.update(req.params.id, req.body)
      .then((product) => {
        if (product) {
          res.status(200).json(product);
        } else {
          res
            .status(404)
            .json({ message: "The product with that id does not exist." });
        }
      })
      .catch(() => {
        res
          .status(500)
          .json({ errorMessage: "The product info could not be modified. " });
      });
  }
});

module.exports = server;
