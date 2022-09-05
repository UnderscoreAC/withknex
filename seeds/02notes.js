/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("notes").del();
  await knex("notes").insert([
    { user_id: "1", content: "Hello World" },
    { user_id: "1", content: "It's me Akon" },
    { user_id: "2", content: "Let's eat food later on" },
  ]);
};
