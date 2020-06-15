let express = require("express");
let app = express();

let dotenv = require("dotenv")
dotenv.config();

let port = process.env.PORT

app.listen(port);

app.use(express.static(process.cwd() + "/dist"))

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})

app.get("/category/:id", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})

app.get("/subcategory/:id", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html")
})
