let rlSync = require('readline-sync');

function greeter() {
  let firstName = rlSync.question("What is your first name? ");
  let lastName = rlSync.question("What is your last name? ");
  return `Hello, ${firstName} ${lastName}!`
}

console.log(greeter());
