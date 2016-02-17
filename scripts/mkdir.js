var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, '../', process.argv[2]);

console.log("Attemping to create directory:\n\t" + dir);
try {
	fs.mkdirSync(dir);
} catch (e) {
	if (e.code != 'EEXIST') throw e;
}
