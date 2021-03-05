var fs = require("fs");
const fileName = "__sapper__/build/server/server.js";
fs.readFile(fileName, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(__dirname);
  var result = data.replace(`"__sapper__/build"`, `__dirname`);

  fs.writeFile(fileName, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
