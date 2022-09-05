// Declare the function Auth Challenger that takes in one parameter, the users

const AuthChallenger = (knex) => {
  // This will return True or False
  return async (username, password) => {
    // This is the password and username that we receive when prompted by our HTML file.
    // code here
    // Logic to see if we can match the username given to a username stored in our JSON file, and if the password matches
    const data = await knex("users").where({ username, password }).first();
    return data ? true : false;
  };
};
// This code exports the function we hae just defined.
module.exports = AuthChallenger;
