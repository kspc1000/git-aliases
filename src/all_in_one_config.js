const fs = require('fs') // node

let text;
try {
    text = fs.readFileSync('./config_commands.txt', 'utf8');
    text = text.split("\n");
    text = text.map(str => str.replace(/\r/g, ""));
    
    console.log(text.join(" && ")); //* prints out copyable all in one command for configuration/initialization of aliases
} catch (err) {
    console.error(err)
}