import { describe, expect, it } from "vitest";
import { toCamelCase } from "../text";

describe("toCamelCase", () => {
    it("should convert a single word to lowercase", () => {
        expect(toCamelCase("Hello")).toBe("hello");
    });

    it("should convert multiple words to camelCase", () => {
        expect(toCamelCase("hello world")).toBe("helloWorld");
    });

    it("should handle strings with mixed casing", () => {
        expect(toCamelCase("HeLLo WoRLd")).toBe("helloWorld");
    });

    it("should handle strings with extra spaces", () => {
        expect(toCamelCase("  hello   world  ")).toBe("helloWorld");
    });

    it("should handle empty strings", () => {
        expect(toCamelCase("")).toBe("");
    });

    it("should handle strings with only spaces", () => {
        expect(toCamelCase("     ")).toBe("");
    });

    it("should handle strings with special characters", () => {
        expect(toCamelCase("hello-world")).toBe("hello-world");
    });

    it("should handle strings with numbers", () => {
        expect(toCamelCase("hello 123 world")).toBe("hello123World");
    });

    it("should handle strings with single character words", () => {
        expect(toCamelCase("a b c")).toBe("aBC");
    });
});
