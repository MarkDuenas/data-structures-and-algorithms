"use strict";

const multiBracketValidation = require("../multi-bracket-validation.js");

describe("bracket validation function tests", () => {
  it("should return true if string is balanced", () => {
    let string = "(({[]}))";
    expect(multiBracketValidation(string)).toBe(true);
  });
  it("should return false if string is not balanced", () => {
    let string = "(({[])";
    expect(multiBracketValidation(string)).toBe(false);
  });
  it("should return false if string is starts with a close bracket", () => {
    let string = "}";
    expect(multiBracketValidation(string)).toBe(false);
  });
});
