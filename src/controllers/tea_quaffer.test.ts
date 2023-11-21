import request from "supertest";
import { app } from "../app";

describe("Test /teaquaffer API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/teaquaffer");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I love to drink herbal tea☕☕");
  });
});
