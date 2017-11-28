// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
const assert = require("assert");

class LexicallyBound {
  getFunction() {
    return () => {
      // arrow functions have lexical `this`, no dynamic `this` solution
      return this;
    };
  }

  getArgumentsFunction() {
    // arguments` doesnt work inside arrow functions Solution
    return () => arguments;
  }
}

describe("arrow functions have lexical `this`, no dynamic `this`", () => {
  it("bound at definition time, use `=>` ", function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();

    assert.strictEqual(fn(), bound);
  });

  it("can NOT bind a different context", function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = bound;

    assert.strictEqual(fn.call(anotherObj), expected);
  });

  it("`arguments` doesnt work inside arrow functions", function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();

    assert.equal(fn(1, 2).length, 0);
  });
});
