require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./routers/hospital')
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())

app.use(router)

app.listen(PORT,() => {
    console.log(`Port running on ${PORT}`)
})