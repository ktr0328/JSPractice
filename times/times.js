Object.defineProperty(Number.prototype, 'times', {  
  value: function(fn, self) {
    self = self || this;
    for (var i=0; i<this; ++i) {
      fn.call(self, i);
    }
    return this;
  }
});

const num = 5

num.times(e => console.log(e))
