const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = JSON.parse(dataBuffer);

dataJSON.author = "Dilek"
const user = JSON.stringify(dataJSON);

fs.writeFileSync('1-json.json', user);