#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var arr = [2];
var not_prime = false;
for(i=3;arr.length<100;i++){

	for(j=2;j<=Math.ceil(Math.sqrt(i));j++){
		if(i%j===0){
			not_prime = true;
			break;
		}
	}
	if(not_prime === false)
		arr.push(i);

	not_prime = false;
}

out = arr.toString()+',';

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
