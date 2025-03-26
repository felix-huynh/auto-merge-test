const assert = require("assert");
const helloWorld = require("./index");

describe("Hello World", () => {
  it('should return "Hello, World!"', () => {
    assert.equal(helloWorld(), "Hello, World!");
  });
});
