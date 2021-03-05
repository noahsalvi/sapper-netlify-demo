import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const server = express().use(
  compression({ threshold: 0 }),
  sapper.middleware()
);

if (dev) {
  server.use(sirv("static", { dev })).listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
}

module.exports = server;
