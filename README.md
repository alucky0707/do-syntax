Haskell like do-syntax for JavaScript

##Example

###List monad

```javascript
var
doSyntax = require('do-syntax'),

xs = [1,2],
ys = eval(doSyntax.syntax)(doSyntax.listM, function () {
    x1 <- xs;
    x2 <- xs;
    return pure([x1, x2]);
});

console.log(ys); // [[1,1],[1,2],[2,1],[2,2]]
```

###Async Monad

```javascript
var
fs = require('fs'),
doSyntax = require('do-syntax');

eval(doSyntax.syntax)(doSyntax.asynxM, function () {
    file1 <- async(fs.readFile)('file1.txt', 'UTF-8');
    file2 <- async(fs.readFile)('file2.txt', 'UTF-8');
    console.log(file1 + file2);
    return pure();
})(function (err) {
    //error callback
    console.log(err);
});
```
