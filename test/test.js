var
assert = require('assert'),
doSyntax = require('../index.js');

describe('do-syntax tests', function() {
  it('listM', function() {
    var
    xs = [1,2],
    ys = eval(doSyntax.syntax)(doSyntax.listM, function() {
      x1 <- xs;
      x2 <- xs;
      return pure([x1, x2]);
    });
    assert.deepEqual(ys, [[1, 1] ,[1, 2], [2, 1], [2, 2]]);
  });
  
  it('optM', function() {
    var
    x = eval(doSyntax.syntax)(doSyntax.optM, function() {
      x <- parseInt('123', 10);
      assert.ok(true);
      return x;
    }),
    y = eval(doSyntax.syntax)(doSyntax.optM, function() {
      y <- parseInt('xxx123', 10);
      assert.ok(false);
      return y;
    });
    assert.equal(x, 123);
    assert.notEqual(y, y);
  });
});