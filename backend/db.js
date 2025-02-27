const mongoose = require("mongoose");

mongoose.connect("");

const UserSchema = new mongoose.Schema({
    username:{ 
        type: true,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:3,
        maxLength: 30
    },
    password:{
        type: String,
        required:true,
        minLength:6
    },
    firstName:{ 
        type: String,
        required: true,
        trim: true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
})

const User = mongoose.model("User",UserSchema)

model.exports ={
    User
} 