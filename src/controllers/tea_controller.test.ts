import request from "supertest";
import { app } from "../app";
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Camomile" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Camomile",
  });
});

test("GET /tea with no param should return correct object with default tea name", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Camomile",
  });
});

test("GET /tea with different param returns object with name set to param string", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Earl Grey" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Earl Grey",
  });
});
