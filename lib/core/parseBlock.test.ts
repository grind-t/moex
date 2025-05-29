import { it, expect } from "vitest";
import { parseMoexBlock } from "./parseBlock.ts";

it("should correctly parse a valid block", () => {
  type TestRecord = { a: number; b: string };
  const block = {
    columns: ["a", "b"] as (keyof TestRecord)[],
    data: [
      [1, "one"],
      [2, "two"],
    ],
  };
  const result = parseMoexBlock<TestRecord>(block);
  expect(result).toStrictEqual([
    { a: 1, b: "one" },
    { a: 2, b: "two" },
  ]);
});

it("should handle empty data", () => {
  type TestRecord = { a: number; b: string };
  const block = {
    columns: ["a", "b"] as (keyof TestRecord)[],
    data: [],
  };
  const result = parseMoexBlock<TestRecord>(block);
  expect(result).toStrictEqual([]);
});

it("maps row values correctly when some values are missing", () => {
  type TestRecord = { a: number; b?: string };
  const block = {
    columns: ["a", "b"] as (keyof TestRecord)[],
    data: [[10]],
  };
  const result = parseMoexBlock<TestRecord>(block);
  expect(result[0].a).toBe(10);
  expect(result[0].b).toBe(undefined);
});
