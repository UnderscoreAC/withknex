class NoteService {
  constructor(knex) {
    this.knex = knex;
  }

  list(user) {
    return this.knex("users")
      .select("notes.content", "notes.id")
      .join("notes", "users.id", "notes.user_id")
      .where("username", user);
  }

  add(note, user) {
    return this.knex("users")
      .select("id")
      .where("username", user)
      .first()
      .then((data) => {
        //{id: 1}
        return this.knex("notes").insert({ user_id: data.id, content: note });
      });
  }

  update(id, note) {
    return this.knex("notes").update({ content: note }).where({ id });
  }

  remove(id) {
    return this.knex("notes").del().where({ id });
  }
}

module.exports = NoteService;
