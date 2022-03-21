const express = require("express")

const connect = require("./configs/db.js")
const usersController = require("./controllers/user.controllers")
const app = express()

app.use(express.json())
app.use("/users",usersController)

const start = async() => {
    await connect()

    app.listen(5500, ()=>{
        console.log("listining on port 5500")
    })
}

module.exports = start