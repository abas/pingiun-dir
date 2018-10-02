const fs = require('fs');
const path = '../../../Documents/';

fs.readdir(path, ['withFileTypes: true'], (err, data) => {
  if (err) {
    throw err;
  } else {
    for (let i = 0; i < data.length; i++) {
      fs.stat(path + data[i], (err, stats) => {
        console.log(stats.isDirectory());
      });
    }
  }
});
