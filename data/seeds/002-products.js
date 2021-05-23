exports.seed = function (knex, Promise) {
  return knex("products")
    .truncate()
    .then(function () {
      return knex("products").insert([
        { name: "Plain TShirts", price: 14.0 },
        { name: "Bandana", price: 8.0 },
        { name: "Shades", price: 25.0 },
        { name: "Hat", price: 20.0 },
        { name: "Beanie", price: 12.0 },
        { name: "Gift Set", price: 20.0 },
        { name: "Camping Poster", price: 15.0 },
        { name: "Night Sky Poster", price: 15.0 },
        { name: "River Poster", price: 15.0 },
        { name: "Colorado Mug", price: 12.0 },
      ]);
    });
};
