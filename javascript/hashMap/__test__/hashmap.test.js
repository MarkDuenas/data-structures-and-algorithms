"use strict";

const HashMap = require("../hashmap.js");

describe("Hash Map method tests", () => {
  let map;
  beforeAll(() => {
    map = new HashMap(16);
  });

  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    map.set("Jake", "Worker");
    expect(map.has("Jake")).toBe(true);
  });

  it("Retrieving based on a key returns the value stored", () => {
    map.set("Jack", "Boss");
    expect(map.get("Jake")).toBe("Jake:Worker");
    expect(map.get("Jack")).toBe("Jack:Boss");
  });

  it("Successfully returns null for a key that does not exist in the hashtable based on a key returns the value stored", () => {
    expect(map.get("Blake")).toBe(null);
  });

  it("Successfully handle a collision within the hashtable", () => {
    let list = map.set("Jack", "Employee");
    expect(list.head.next.value).toBe("Jack:Employee");
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    map.set("Anne", "Teacher");
    map.set("Bob", "Student");
    map.set("Dan", "Student");
    map.set("Mark", "Student");
    let value = map.get("Jack");
    let value2 = map.get("Anne");
    expect(value).toBe("Jack:Boss");
    expect(value2).toBe("Anne:Teacher");
  });

  it("Successfully hash a key to an in-range value", () => {
    let hash = map.hash("Jake") < map.size;
    let hash2 = map.hash("Dragonwingomegaone") < map.size;
    let hash3 = map.hash("Dancingwiththewolves") < map.size;

    expect(hash).toBe(true);
    expect(hash2).toBe(true);
    expect(hash3).toBe(true);
  });
});
