import { describe, expect, it } from "vitest";
import { mapGender } from "../genderMapper";

describe("mapGender", () => {
  it('should return "Laki-laki" when input is "MAN"', () => {
    expect(mapGender("MAN")).toBe("Laki-laki");
  });

  it('should return "Perempuan" when input is "WOMAN"', () => {
    expect(mapGender("WOMAN")).toBe("Perempuan");
  });

  it('should return "Perempuan" when input is empty string', () => {
    expect(mapGender("")).toBe("Perempuan");
  });

  it('should return "Perempuan" when input is null', () => {
    expect(mapGender(null)).toBe("Perempuan");
  });

  it('should return "Perempuan" when input is undefined', () => {
    expect(mapGender(undefined)).toBe("Perempuan");
  });
});
