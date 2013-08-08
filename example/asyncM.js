var
fs = require('fs'),
doSyntax = require('do-syntax');

eval(doSyntax.syntax)(doSyntax.asynxM, function () {
    file <- async(fs.readFile)('asyncM.js', 'UTF-8');
    console.log(file);
    return pure();
})(function (err) {
    //error callback
    console.log(err);
});

