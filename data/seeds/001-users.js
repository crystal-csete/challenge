exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          name: "Maria Smith",
          bio: "Traveler with a passion for photography.",
        },
        {
          name: "Peter Bangels",
          bio: "Freelance web developer with a passion for hiking.",
        },
        {
          name: "George Times",
          bio: "Artist with a passion for networking.",
        },
        {
          name: "William Haunter",
          bio: "Ghost hunter with a passion for electronics.",
        },
        {
          name: "Thomas Winter",
          bio: "Journalist with a passion for camping.",
        },
      ]);
    });
};
