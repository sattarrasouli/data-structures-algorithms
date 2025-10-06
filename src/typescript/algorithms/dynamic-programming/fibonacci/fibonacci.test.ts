import  {fibonacci}  from "./fibonacci";

describe("Fibonacci Algorithm", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 5 for n = 5", () => {
    expect(fibonacci(5)).toBe(5); // sequence: 0,1,1,2,3,5
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });
});
