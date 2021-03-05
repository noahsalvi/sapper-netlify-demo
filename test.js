var fs = require("fs");
const fileName = "__sapper__/build/server/server.js";
fs.readFile(fileName, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace("__sapper__/build", "./__sapper__/build");

  fs.writeFile(fileName, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
