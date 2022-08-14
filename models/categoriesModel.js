const mongoose =require('../config/mongodb');
const bcrypt = require("bcrypt");
const validator = require("../util/validators");
const errorMessage = require('../util/errorMessage');

//crear el schema
const categoriesSchema=  mongoose.Schema({
    name: {
        type: String,
        }
})
module.exports = mongoose.model("categories", categoriesSchema)