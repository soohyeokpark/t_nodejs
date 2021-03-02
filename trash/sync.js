var fs = require('fs');

// sync 동기
console.log('----sync start----');
var result = fs.readFileSync('trash/dummydata.txt', 'utf-8');
console.log(result);
console.log('----sync end----');

// async 비동기
console.log('----async start----');
fs.readFile('trash/dummydata.txt', 'utf-8', function(err, result2){
    console.log(result2);
});
console.log('----async end----');

