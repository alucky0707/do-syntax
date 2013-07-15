function doSyntax(__monad__, __func__, __debug__) {
  var
  __n__ = 0;
  __func__ = __func__.toString().slice(0, -1).replace(/([;{}]\s*)([a-zA-Z$_][a-zA-Z0-9$_]*(?:,[a-zA-Z$_][a-zA-Z0-9$_]*)*)\s*<\s*\-\s*([^;]+)/g, function(m, x, n, e) {
    __n__ += 1;
    return x + 'return __monad__.bind(' + e + ', function(' + n + ') {';
  });
  __func__ += Array(__n__ + 1).join('});');
  __func__ = '(function() { with(__monad__) { return (' + __func__ + '})();}})()';
  if(__debug__) console.log(__func__);
  return eval(__func__);
}

module.exports = '(' + doSyntax.toString() + ')';