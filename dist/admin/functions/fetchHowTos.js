const fs = require('fs');
const { join } = require('path');

exports.handler = function(event, context, callback ) {
  // let path = "/dist/admin/collections/How-tos"
  // let folder = fs.readdirSync(path).map(name => join(path, name))
  // let data = folder.map(x =>  JSON.parse(fs.readFileSync(x, 'utf-8')))
  // let x = new Promise(function(resolve, reject) {
  //   resolve(data)
  // });
  return {
    event,
    context,
    callback,
  }
  // callback(null, {
  //     statusCode: 200,
  //     body:x
  //   });
}
