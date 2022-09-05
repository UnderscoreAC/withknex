const express = require("express");
const { engine } = require("express-handlebars");
const basicAuth = require("express-basic-auth");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const NoteRouter = require("./Routers/NoteRouter");
const NoteService = require("./Services/NoteService");
const AuthChallenger = require("./AuthChallenger");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

const port = 3000;

app.use(
  basicAuth({
    authorizer: AuthChallenger(knex),
    challenge: true,
  })
);

const noteService = new NoteService(knex);

app.get("/", (req, res) => {
  noteService.list(req.auth.user).then((notes) => {
    console.log(notes);
    res.render("index", {
      user: req.auth.user,
      notes,
    });
  });
});

app.use("/api/notes", new NoteRouter(noteService, express).router()); //pass in noteService and express as argument

app.listen(port, () => {
  console.log("Listening on 3000");
});
