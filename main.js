const fs = require('fs');

const message = 'Hello, World!';
const fileName = 'output.txt';

fs.writeFile(fileName, message, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log(`Successfully wrote "${message}" to ${fileName}`);
  }
});