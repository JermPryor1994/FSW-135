const express = require("express")
const jarvis = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

jarvis.use('/movies', require('./routes/movieRouter'))

jarvis.get("/", (req, res) => {
    res.send("Hello World!")
})

jarvis.listen(9000, () => {
    console.log("Connected to port 9000!")
})