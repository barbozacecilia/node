const mongose = require("mongoose");

mongose.connect("mongodb://localhost/node-project", function (error){
    if(error){
        throw error
    }else{
        console.log ()
    }
})
module.exports = mongose
