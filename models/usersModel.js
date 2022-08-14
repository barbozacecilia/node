const mongoose =require('../config/mongodb');
const bcrypt = require("bcrypt");
const validator = require("../util/validators");
const errorMessage = require('../util/errorMessage');

//crear el schema
const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true,errorMessage.GENERAL.required_field],
        minLength: [3, '3caracteres tiene que tener'],
        unique: false,
        },
    lastName: {
            type: String,
            required: [true, errorMessage.GENERAL.required_field],
            minLength: [3, '3caracteres tiene que tener'],
            unique: false,
        },
    email: {
        type: String,
        unique: true,
        validate:{
            validator: function(value){
                return validator.emailValidate(value)
            },
            message: errorMessage.USER.emailIncorrect
        },
        },
    password: {
        type: String,
        validate: {
            validator: function(value){
                return validator.passwordValidate(value)
            },
            message: errorMessage.USER.passwordIncorrect
        },
        select: false
    }
})
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
module.exports= mongoose.model("users", userSchema)