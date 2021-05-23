exports.up = function (knex, Promise) {
  return knex.schema.createTable("products", function (products) {
    products.increments();

    products.string("name", 128).unique().notNullable();
    products.decimal("price").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("products");
};
