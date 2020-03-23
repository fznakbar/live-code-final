const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(routes)
app.use(errorHandler)

app.listen(PORT, console.log(`Running on PORT >>> ${PORT}`))
