const express = require("express")
const cors = require("cors")
const app = express ()
const PORT = 4000 | process.env.PORT
const router = require("./routes")

var corsOpts = {
    origin: "https://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}

//Utilities
const cookieParser = require('cookie-parser')

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use(cors(corsOpts))

//Routes
app.use(router)

app.listen(PORT, () => {
    console.log('Listening on port http://localhost:${PORT}')
})