const express = require("express")
const jarvis = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

jarvis.use(morgan('dev'))
jarvis.use(express.json())

mongoose.connect("mongodb://localhost:27017/moviedb", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to moviedb!")
)

jarvis.use('/movies', require('./routes/movieRouter'))

jarvis.use((req, res, err, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

jarvis.listen(9000, () => {
    console.log("Connected to port 9000!")
})
