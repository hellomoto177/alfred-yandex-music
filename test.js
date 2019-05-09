const osa = require("@expo/osascript");

// console.log("osa:", osa);
const count = osa.execAsync('tell app "Google Chrome" to quit');
count.then(res => console.log("res:", res));
