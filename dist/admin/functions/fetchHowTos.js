const fs = require('fs');
const { join } = require('path');
const path = require("path")

exports.handler = function(event, context, callback ) {
  const filePath = '/var/task/dist/admin/collections/How-tos/';
  let folder = fs.readdirSync(filePath).map(x => join(filePath, x))
  let data = folder.map(x =>  JSON.parse(fs.readFileSync(x, 'utf-8')))

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
