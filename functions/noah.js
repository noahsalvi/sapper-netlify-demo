"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3000;

console.log("Starting server on port " + process.env.PORT);
const serverless = require("serverless-http");
const server = require("../__sapper__/build/server/server.js");

module.exports.handler = serverless(server);
