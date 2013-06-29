var fs = require('fs');

//var contents = fs.readFileSync('index.html');
var callback = function(err,contents){
  console.log(contents);
}

var contents = fs.readFile('hello.txt', callback);



//console.log(contents);