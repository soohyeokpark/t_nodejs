var fs = require('fs');
var v = null;

fs.readFile('dummydata.txt', 'utf8', function(err, data) {
    v = data;
    console.log('in v ' + v);
});

console.log('\nout v ' + v);
