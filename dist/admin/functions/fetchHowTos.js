const fs = require('fs');
const { join } = require('path');
const path = require("path")

// const filePath = path.resolve(__dirname, 'dist/admin/collections/How-tos');
// let folder = fs.readdirSync(filePath).map(x => join(filePath, x))
// let data = folder.map(x =>  JSON.parse(fs.readFileSync(x, 'utf-8')))

exports.handler = function(event, context, callback ) {

  console.log(path.resolve("./testing.json"));
  let file_path = path.resolve("./testing.json")
  let file = JSON.parse(fs.readFileSync(file_path, 'utf-8'))
  callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: file
      })
    });
}
