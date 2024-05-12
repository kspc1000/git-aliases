const fs = require('fs') // node

const greenColourCode = "\x1b[32m";
const redColourCode = "\x1b[31m";
const resetColourCode = "\x1b[0m";
let text;
try {
    text = fs.readFileSync('./config_commands.txt', 'utf8');
    text = text.split("\n");
    text = text.map(str => str.replace(/\r/g, ""));
    text = greenColourCode + text.join(redColourCode + " && " + greenColourCode) + resetColourCode;
    console.log(text);
    // console.log("\x1b[32m" + text.join(" && ") + "\x1b[0m"); //* prints out copyable all in one command for configuration/initialization of aliases
} catch (err) {
    console.error(err)
}