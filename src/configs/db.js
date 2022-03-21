const mongoose = require("mongoose")


const connect = ()=> {
    return mongoose.connect("mongodb+srv://saumitravns:saumitra123@cluster2.sjb36.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect