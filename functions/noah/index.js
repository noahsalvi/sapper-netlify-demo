"use strict";
const serverless = require("serverless-http");
const server = require("../../__sapper__/build/server/server");

exports.handler = serverless(server);
