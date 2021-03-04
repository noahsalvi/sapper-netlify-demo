"use strict";
const server = require("../../__sapper__/build/server/server");

exports.handler = async function (event, context) {
  console.log("heeeelllooo");
  server();
};
