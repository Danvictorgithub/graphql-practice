import request from "supertest";

import app from "../src/app";

describe("GET /api/", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "Hello World",
        },
        done,
      );
  });
});
