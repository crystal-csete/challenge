exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Samwise Gamgee",
          bio: "Gardener and poet. Married to Rose Cotton",
        },
        {
          name: "Frodo Baggins",
          bio: "The ring bearer",
        },
      ]);
    });
};
