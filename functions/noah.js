"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3000;

const build_dir = "__sapper__/build";
const execSync = require("child_process").execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync("ls", { encoding: "utf-8" }); // the default is 'buffer'
console.log("Output was:\n", output);

buf
  .toString()
  .split(/\n/)
  .forEach(function (line) {
    // do something here with each line
  });

console.log("Starting server on port " + process.env.PORT);
const serverless = require("serverless-http");
const server = require("../__sapper__/build/server/server");
console.log("running noah.js");
module.exports.handler = serverless(server);
