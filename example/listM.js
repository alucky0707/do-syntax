var
doSyntax = require('../index.js');

var
xs = [1,2],
ys = eval(doSyntax.syntax)(doSyntax.listM, function() {
  x1 <- xs;
  x2 <- xs;
  return pure([x1, x2]);
});

console.log(ys);
