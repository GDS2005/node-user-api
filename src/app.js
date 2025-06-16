const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require("express-rate-limit");
const morgan = require("morgan")
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use(morgan('dev'))

/* SECURITY */
app.use(cors())
app.use(helmet())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});

app.use(limiter)

/* SERVER SETTING */
app.use('/v1', require('./routes/v1/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})