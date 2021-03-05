"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 8888;

const execSync = require("child_process").execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
let output = execSync("pwd", { encoding: "utf-8" }); // the default is 'buffer'
console.log("ls:\n", output);

console.log("Starting server on port " + process.env.PORT);
const serverless = require("serverless-http");
const server = require("./__sapper__/build/server/server");
module.exports.handler = serverless(server);
