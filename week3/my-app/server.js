const express = require("express")
const jarvis = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


// Middleware

jarvis.use(express.json())
jarvis.use(morgan('dev'))

// Connect to DB

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/inventorydb'); console.log("Connected to DB")
}


// Routes
jarvis.use("/", require("./routes/issueRouter"))
jarvis.use("/auth", require("./routes/authRouter"))

// ERROR HANDLER

jarvis.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


jarvis.listen(9000, () => {
    console.log("This server is running on Port 9000")
})