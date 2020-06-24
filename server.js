let express = require("express");
let app = express();
let fs = require('fs')
const { join } = require('path');

let dotenv = require("dotenv")
dotenv.config();

let port = process.env.PORT

app.listen(port);

app.use(express.static(process.cwd() + "/dist"))

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})

app.get("/admin", (req, res) => {
  res.sendFile(process.cwd() + "/dist/admin/index.html")
})

app.get("/hows", (req, res) => {
  let path = "./dist/admin/collections/How-tos"
  let folder = fs.readdirSync(path).map(name => join(path, name))
  let data = folder.map(x => JSON.parse(fs.readFileSync(x, 'utf-8')))
  res.json(data)
})

app.get("/category/:id", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})

app.get("/subcategory/:id", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})
