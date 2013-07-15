var
listM = {
  bind: function(xs, f) {
    return xs.reduce(function(ys, x) {
      return ys.concat(f(x));
    }, []);
  },
  pure: function(x) {
    return [x];
  },
  fail: [],
},
optM = {
  bind: function(x, f) {
    return x && f(x);
  },
  pure: function(x) {
    return Object(x);
  },
  fail: undefined,
};

module.exports = {
  listM: listM,
  optM: optM,
};
