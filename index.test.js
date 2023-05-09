const g = require("./index.js");

describe("g", function () {
  test("g(6) is 0", function () {
    expect(g(6)).toBe(0);
  });
  test("g(7) is 1", function () {
    expect(g(7)).toBe(1);
  });
  test("g(17) is 3", function () {
    expect(g(17)).toBe(2);
  });
  test("g(70) is 8", function () {
    expect(g(70)).toBe(8);
  });
  test("g(100) is 19", function () {
    expect(g(100)).toBe(19);
  });
  test("g(1000) is 271", function () {
    expect(g(1000)).toBe(271);
  });
});
