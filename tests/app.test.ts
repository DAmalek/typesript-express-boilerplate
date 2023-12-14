import app from "../src/app";
import httpStatus from "http-status";
import supertest from "supertest";

const api = supertest(app);

describe("integration test", () => {
  it("should return 200 and requests running", async () => {
    const { text, status } = await api.get("/health");
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("requests running");
  });
});
