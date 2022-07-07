const express = require("express")
const jarvis = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

jarvis.use(express.json())
jarvis.use(morgan('dev'))

// Old way to connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/moviedb", 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// },
// () => console.log("Connected to moviedb!")
// )

//NEW way to connect to MongoDB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/moviesdb'); console.log("Connected to DB")
  }

jarvis.use('/movies', require('./routes/movieRouter'))

jarvis.use((req, res, err, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

jarvis.listen(9000, () => {
    console.log("Connected to port 9000!")
})
