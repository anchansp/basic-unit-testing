import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum, faqTorial } from "./basic";

describe("sumAndPlusTen", () => {
  it("should return the sum of a + b + 10 when a, b is integer", () => {
    /* -----AAA Pattern----- */

    // Arrange - Set up the test
    const a = 5;
    const b = 10;

    // Act - Execute the test
    const result = sumAndPlusTen(a, b);

    // Assert - Check the result
    expect(result).toBe(25);
    // expect(result).not.toBeNaN;
  });

  it("should return NaN if any of the parameter is not provided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen();

    expect(result).toBe(NaN);
  });
});

describe("maxNum", () => {
  it("should return the second argument when it is greater", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("should return the first argument  when it is greater", () => {
    expect(maxNum(50, 1)).toBe(50);
  });
  it("should return the first argument when both arguments are equal", () => {
    expect(maxNum(5, 5)).toBe(5);
  });
  it("should throw an error if one of the arguments is not a number", () => {
    expect(() => maxNum(5, "10")).toThrow("Masukin angka gblg");
  });
});

describe("faqTorial", () => {
  it("should return the factorial of the given number", () => {
    expect(faqTorial(5)).toBe(120);
  });
  it("should throw error if the given input is not a number", () => {
    expect(() => faqTorial("5")).toThrow("Masukin angka gblg");
  });
  it("should throw error if the given input is a negative number", () => {
    expect(() => faqTorial(-5)).toThrow("Jangan masukin minus kocak");
  });
  //   it("should throw error if the given input is not a whole number", () => {
  //     expect(() => faqTorial(5.5)).toThrow("Angkany jangan desimal, Bambang");
  //   });
  it("should return 1 if the given number is 0", () => {
    expect(faqTorial(0)).toBe(1);
  });
  it("should return 1 if the given number is 1", () => {
    expect(faqTorial(1)).toBe(1);
    // expect(faqTorial(1)).toBe(2);
  });
});
