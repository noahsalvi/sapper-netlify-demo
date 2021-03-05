import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const server = express() // You can also use Express
  .use(compression({ threshold: 0 }), sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
if (dev) {
  server.use(sirv("static", { dev }));
}

module.exports = server;
