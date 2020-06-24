const fs = require('fs');
const { join } = require('path');
const path = require("path")

const filePath = process.cwd();
// let folder = fs.readdirSync(filePath).map(x => join(filePath, x))
// let data = folder.map(x =>  JSON.parse(fs.readFileSync(x, 'utf-8')))

exports.handler = function(event, context, callback ) {
  console.log(filePath, 'the stuff')
  callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: "dope!"
      })
    });
}
