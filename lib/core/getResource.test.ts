import { it, expect } from "vitest";
import { getMoexResource } from "./getResource.ts";

it("should build URL with given path, block and params", () => {
  const url = getMoexResource("engines/stock", "marketdata", {
    ticker: "SBER",
    quantity: 100,
  });
  expect(url.origin).toBe("https://iss.moex.com");
  expect(url.pathname).toBe("/iss/engines/stock");
  expect(url.searchParams.get("ticker")).toBe("SBER");
  expect(url.searchParams.get("quantity")).toBe("100");
  expect(url.searchParams.get("iss.meta")).toBe("off");
  expect(url.searchParams.get("iss.only")).toBe("marketdata");
});

it("should ignore undefined parameters", () => {
  const url = getMoexResource("engines/stock", "marketdata", {
    ticker: undefined,
    active: "true",
  });
  expect(url.searchParams.has("ticker")).toBe(false);
  expect(url.searchParams.get("active")).toBe("true");
});

it("should work with no params provided", () => {
  const url = getMoexResource("engines/bonds", "marketdata");
  expect(url.searchParams.get("iss.meta")).toBe("off");
  expect(url.searchParams.get("iss.only")).toBe("marketdata");
  expect(url.searchParams.toString()).toBe("iss.meta=off&iss.only=marketdata");
});
