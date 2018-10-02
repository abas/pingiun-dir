const fs = require('fs');
const path = 'http://pinguin.dinus.ac.id/iso';

fs.readdir(path, (err, data) => {
  console.log(path);
  // for (var i = 0; i < data.length; i++) {
  //   console.log(data[i].isDirectory());
  // }
});
