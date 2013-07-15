Haskell like do-syntax for JavaScript

##Example

```javascript
var
doSyntax = require('do-syntax'),

xs = [1,2],
ys = eval(doSyntax.syntax)(doSyntax.listM, function() {
    x1 <- xs;
    x2 <- xs;
    return pure([x1, x2]);
});

console.log(ys); // [[1,1],[1,2],[2,1],[2,2]]
```

