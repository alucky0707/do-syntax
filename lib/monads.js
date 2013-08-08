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
},
asyncM = {
  bind: function(x, onSuccess) {
    return function (onError) {
      onError = onError || function() {};
      x(function (err, res) {
        res = Array.prototype.slice.call(arguments, 1);
        if (err) {
          return onError(err);
        }
        onSuccess.apply(this, res)(onError);
      });
    };
  },
  pure: function (x) {
    return function (_) {
      return x;
    };
  },
  async: function(obj, f) {
    if (!f) {
      f = obj;
      obj = this;
    }
    if (typeof f !== 'function') {
      f = obj[f];
    }
    return function(args) {
      args = Array.prototype.slice.call(arguments, 0);
      return function(callback) {
        return f.apply(obj, args.concat(callback));
      };
    };
  },
};

module.exports = {
  listM: listM,
  optM: optM,
  asyncM: asyncM,
};
