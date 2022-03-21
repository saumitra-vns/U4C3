const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {type:String,required:true,min:3,max:30}
    lastName : {type:String,required:false,min:3,max:30},
    age : {type:Number,required:true,min:1,max:150},
    email : {type:String,required:true,unique:true},
    profileImage:[{type:String,required:true}]
},
{
    timestamps:{type:String,required:true}

})

const User = mongoose.model("user",userSchema)


const bookSchema = new mongoose.Schema({
    likes:{type:Number, required : true, default:0},
    coverImage:{type:String,unique:true},
    content:{type:String,required:true}

},
{
    timestamps:{type:String,required:true}

})
const Book = mongoose.model("book",bookSchema)

const publicationSchema = new mongoose.Schema({
    name : {type: String,required:true}

},
{
    timestamps:{type:String,required:true}

})
const Publication = mongoose.model("publication",publicationSchema)

const commentSchema = new mongoose.Schema({
    body : {type: String,required:true}

},
{
    timestamps:{type:String,required:true}

})
const Comment = mongoose.model("comment",publicationSchema)

module.exports = {User,Book,Publication,Comment}
