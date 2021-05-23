const express = require("express");
const helmet = require("helmet");

const Users = require("../data/userdb.js");

const server = express();

server.use(helmet());
server.use(express.json());

// User endpoints below

server.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({
        errorMessage: "The users information could not be retrieved.",
      });
    });
});

server.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: "The user information could not be retrieved." });
    });
});

server.post("/", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    Users.insert(req.body)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(() => {
        res.status(500).json({
          errorMessage:
            "There was an error while saving the user to the database",
        });
      });
  }
});

server.delete("/:id", (req, res) => {
  Users.remove(req.params.id)
    .then((count) => {
      if (count && count > 0) {
        res.status(200).json({
          message: "the user was deleted.",
        });
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "The user could not be removed" });
    });
});

server.put("/:id", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    Users.update(req.params.id, req.body)
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({
            message: "The user with the specified ID does not exist.",
          });
        }
      })
      .catch(() => {
        res.status(500).json({
          errorMessage: "The user information could not be modified.",
        });
      });
  }
});

module.exports = server;
