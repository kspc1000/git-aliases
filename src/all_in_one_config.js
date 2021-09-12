const fs = require('fs')

let text;
try {
    text = fs.readFileSync('../aliases_config.md', 'utf8');

    text = text.replace(/http\S+/g, ""); // remove all http links
    text = text.trim();
    text = text.split("<br>");
    text = text.map(str => str.replace(/\r\n/g, "")); // remove all unwanted characters
    text = text.filter(str => str); // remove any empty elements
    
    console.log(text.join(" && ")); //* prints out copyable all in one command for configuration/initialization of aliases
} catch (err) {
    console.error(err)
}