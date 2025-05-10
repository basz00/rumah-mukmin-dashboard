import { expect, describe, it } from "vitest";

import { reservationServicesMapper } from "../reservationServicesMapper";

describe("reservationServicesMapper", () => {
  it("should handle unknown services by returning the original value", () => {
    const services = ["UNKNOWN_SERVICE"];
    const result = reservationServicesMapper(services);
    expect(result).toBe("UNKNOWN_SERVICE");
  });

  it("should return empty string for empty input", () => {
    const result = reservationServicesMapper([]);
    expect(result).toBe("");
  });

  it("should join multiple services with comma separator", () => {
    const services = ["ACUPUNCTURE", "ACUPRESSURE", "EYE_GURAH_THERAPY"];
    const result = reservationServicesMapper(services);
    expect(result).toBe("Acupuncture, Acupressure, Gurah Mata");
  });
});
