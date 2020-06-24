const fs = require('fs');
const { join } = require('path');
const path = require("path")

const filePath = __dirname + '/dist/admin/collections/How-tos';
let folder = fs.readdirSync(filePath).map(x => join(filePath, x))
let data = folder.map(x =>  JSON.parse(fs.readFileSync(x, 'utf-8')))

exports.handler = function(event, context, callback ) {
  console.log(path.resolve("./README.md"), 'this is a console.log thats working',
      fs.readdirSync("/var"), fs.readdirSync("/var/tmp"),
    fs.readdirSync("/var/lib"), fs.readdirSync("/usr/lib/locale"));

  let x = new Promise(function(resolve, reject) {
    resolve(data)
  });

  callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: data
      })
    });
}
