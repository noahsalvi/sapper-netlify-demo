"use strict";
const serverless = require("serverless-http");
const server = require("../__sapper__/build/server/server");

module.exports.handler = serverless(server);
