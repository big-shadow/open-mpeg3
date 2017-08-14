var fs = require('fs');
const file = '/home/rw/Documents/GitHub-Repos/open-mpeg3/package.json';


fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  else {

    var myRegexp = /"version": "([0-9]+)\.([0-9]+)\.([0-9]+)"/g;
    var match = myRegexp.exec(data);

    var major = match[1];
    var minor = match[2];
    var commit = match[3]

    commit++;

    if(commit > 9)
    {
      commit = 0;
      minor++;

      if(minor > 9)
      {
        minor = 0;
        major++;
      }
    }
  }

  var newData = data.replace(match[0], `"version": "${major}.${minor}.${commit}"`);

  fs.writeFile(file, newData, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("Updated version.");
  });

});
