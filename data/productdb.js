const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

// Products db below

function find() {
  return db("products");
}

function findById(id) {
  return db("products")
    .where({ id: Number(id) })
    .first();
}

function insert(products) {
  return db("products")
    .insert(products)
    .then((ids) => ({ id: ids[0] }));
}

function update(id, products) {
  return db("products").where("id", Number(id)).update(products);
}

function remove(id) {
  return db("products").where("id", Number(id)).del();
}
