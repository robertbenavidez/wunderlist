const request = require('supertest');

const server = require('./server.js');

const db = require('../data/db-config.js');


            
        
describe('CRUD Tests', () => {
    beforeAll(async () => {
        await db("users").truncate();
    });
    
      it("tests are running with DB_ENV set to 'testing'", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });
    describe("auth-router tests", () => {
        describe("POST /api/auth/register", () => {
          it("should return a 201 created status", () => {
            return request(server)
              .post("/api/auth/register")
              .send({
                username: "m",
                password: "final"
              })
              .then(res => {
                expect(res.status).toBe(201);
              });
          });
          it("should return a JSON object after creating a user", () => {
            return request(server)
              .post("/api/auth/register")
              .send({
                username: "Dave",
                password: "pass"
              })
              .then(res => {
                expect(res.type).toEqual("application/json");
              });
          });
        });
    })

    describe("POST /api/auth/login", () => {
        it("should return a 200 OK status", () => {
          return request(server)
            .post("/api/auth/login")
            .send({
              username: "Dave",
              password: "pass"
            })
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
        it("should return a JSON object", () => {
          return request(server)
            .post("/api/auth/login")
            .send({
              username: "Dave",
              password: "pass"
            })
            .then(res => {
              expect(res.type).toMatch(/json/);
            });
        });
    });

    describe("tasks-router tests", () => {
        describe("GET /api/tasks", () => {
          it("should return an array of tasks", () => {
            return request(server)
              .get("/api/tasks")
              .set(
                "Authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InIiLCJpYXQiOjE1NzIwNDgxNDksImV4cCI6MTU3MjEzNDU0OX0.dY1OcIr55WNaDWdOZm0rfioffokBMxepIeGzUfml1Cs"
              )
              .then(res => {
                expect(Array.isArray(res.body)).toBe(true);
              });
          });
          it("should return a status 200 code", () => {
            return request(server)
              .get("/api/tasks")
              .set(
                "Authorization",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InIiLCJpYXQiOjE1NzIwNDgxNDksImV4cCI6MTU3MjEzNDU0OX0.dY1OcIr55WNaDWdOZm0rfioffokBMxepIeGzUfml1Cs"
              )
              .then(res => {
                expect(res.status).toBe(200);
              });
            });
        });
    });
})
    
  