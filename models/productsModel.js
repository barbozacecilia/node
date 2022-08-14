const mongoose =require('../config/mongodb');
/*Nombre
Precio
Código
Descripción
Categoría
*/

//crear el schema
const productSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true,'el campo nombre es obligatorio'],
        minLength: [3, 'El campo tiene que tener más de 3 caracteres'],
        unique: true,
        uppercase: true
        },
    price:{
        type: Number,
        min: 0,
        get: function(value){
            return value*5.5
        }
        },
    description: String,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    code: {
        type: String,
        unique: true,
    },
})

productSchema.virtual("price_currency").get(function(){
    return "$ " + this.price 
})
productSchema.set('toJSON',{getters: true, virtuals: true})
module.exports= mongoose.model("products", productSchema)