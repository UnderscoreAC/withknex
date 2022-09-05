/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { username: "akon", password: "123" },
    { username: "bkon", password: "123" },
    { username: "ckon", password: "123" },
  ]);
};
