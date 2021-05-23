exports.seed = function (knex, Promise) {
  return knex("products")
    .truncate()
    .then(function () {
      return knex("products").insert([
        { id: 1, name: "Plain TShirts", price: 14.0 },
        { id: 2, name: "Bandana", price: 8.0 },
        { id: 3, name: "Shades", price: 25.0 },
        { id: 4, name: "Hat", price: 20.0 },
        { id: 5, name: "Beanie", price: 12.0 },
        { id: 6, name: "Gift Set", price: 20.0 },
        { id: 7, name: "Camping Poster", price: 15.0 },
        { id: 8, name: "Night Sky Poster", price: 15.0 },
        { id: 9, name: "River Poster", price: 15.0 },
        { id: 10, name: "Colorado Mug", price: 12.0 },
      ]);
    });
};
