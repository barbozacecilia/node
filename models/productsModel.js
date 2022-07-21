const mongoose =require('../config/mongodb');

//crear el schema
const productSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true,'el campo nombre es obligatorio'],
        minLength: [3, '3caracteres tiene que tener'],
        },
    price: Number,
    description: String,
    quantity: Number,
})

module.exports= mongoose.model("products", productSchema)