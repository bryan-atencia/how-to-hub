let express = require("express");
let app = express();

let port = 3000
let path = require("path")

app.listen(port, () => {
  console.log("listening on " + port)
})

app.use(express.static(process.cwd() + "/dist"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./"), 'index.html');
})
