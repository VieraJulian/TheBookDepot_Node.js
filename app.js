const express = require('express')
const app = express()
const { port, start } = require("./src/modules/port")
const cors = require("cors")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, start)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors());

app.use("/user", require("./src/routes/user.routes"))
app.use("/product", require("./src/routes/product.routes"))