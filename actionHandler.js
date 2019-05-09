const chrome = require("./chrome");

if (process.argv[2]) {
  const action = process.argv[2];
  action && chrome[action]();
}
