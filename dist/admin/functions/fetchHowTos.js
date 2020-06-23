let fs = require('fs');

exports.handler = function(event, context, callback ) {
  let path = "./collections/How-tos"
  let data = []
  fs.readdir(path, (x, y) => {
    data = [...y]
  })
  callback(null, {
      statusCode: 200,
      body: JSON.stringify({ data: data })
    });
}
