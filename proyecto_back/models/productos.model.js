const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},
    nombre_producto:{type: String, required: true, max:150},
    marca:{type: String, required: true, max:60},
    modelo:{type: String, required: true, max:60},
    serie:{type: String, required: true, max:60},
    familia:{type: String, required: true, max:60},
    ubicacion:{type: String, required: true, max:150},
    cantidad:{type: Number, required: true, max:70},
    costo_unidad:{type: Number, required: true, max:350},
    fecha_de_compra:{type: String, required: true, max:60},
    estado_del_producto:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:350},
});

module.exports = mongoose.model("productos", ProductosSchema);