const fs = require('fs');
const path = '../../';

fs.readdir(path, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      fs.stat(path + data[i], (err, stats) => {
          if(stats.isDirectory())
            console.log(path+data[i]);
      });
    }
});
