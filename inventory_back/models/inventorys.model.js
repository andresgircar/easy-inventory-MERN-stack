const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    inventory_id:{type: String, required: true, max:60},
    producto:{type: String, required: true, max:150},
    marca:{type: String, required: true, max:60},
    modelo:{type: String, required: true, max:60},
    familia:{type: String, required: true, max:150},
    cantidad:{type: Number, required: true, max:70},
    costo:{type: Number, required: true, max:350},
});

module.exports = mongoose.model("inventory", InventorySchema);