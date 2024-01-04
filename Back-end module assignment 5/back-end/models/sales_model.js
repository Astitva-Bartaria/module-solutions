const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema.Types;

const salesSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
});

mongoose.model("SalesModel",salesSchema);