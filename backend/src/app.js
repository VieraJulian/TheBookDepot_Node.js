const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const { port, start } = require("./modules/port")
const dotenv = require('dotenv');
dotenv.config();

let corsOptions = {
  origin: process.env.DOMAIN,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => { res.send('Hello World!') })

app.listen(port, start)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", require("./routes/user.routes"))
app.use("/products", require("./routes/product.routes"))
app.use("/carts", require("./routes/cart.routes"))
app.use("/admins", require("./routes/admin.routes"))
app.use("/search", require("./routes/search.routes"))