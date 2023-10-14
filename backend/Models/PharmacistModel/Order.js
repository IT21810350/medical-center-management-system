const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    name : {
        type :String,
        requied : true
    },
    dosage : {
        type: String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    quantity : {
        type :String,
        required : true
    },
    due : {
        type : String,
        required : true
    },
    order : {
        type : String,
        required : true
    },
    reorder : {
        type : String,
        required : true
    },
    more : {
        type : String,
        required : true
    }
   



})


const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;