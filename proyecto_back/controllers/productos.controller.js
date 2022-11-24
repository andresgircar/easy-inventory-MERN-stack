const Producto = require("../models/productos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let producto = new Producto({
        producto_id: req.body.producto_id,
        nombre_producto: req.body.nombre_producto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        serie: req.body.serie,
        familia: req.body.familia,
        ubicacion: req.body.ubicacion,
        cantidad: req.body.cantidad,
        costo_unidad: req.body.costo_unidad,
        fecha_de_compra: req.body.fecha_de_compra,
        estado_del_producto: req.body.estado_del_producto,
        descripcion: req.body.descripcion

    })

    producto.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar Producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Producto se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){
    Producto.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })
}

exports.update = function(req,res){
    let producto = {
        producto_id: req.body.producto_id,
        nombre_producto: req.body.nombre_producto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        serie: req.body.serie,
        familia: req.body.familia,
        ubicacion: req.body.ubicacion,
        cantidad: req.body.cantidad,
        costo_unidad: req.body.costo_unidad,
        fecha_de_compra: req.body.fecha_de_compra,
        estado_del_producto: req.body.estado_del_producto,
        descripcion: req.body.descripcion
    }

    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar Producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Producto modificado correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el Producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Producto eliminado correctamente"
        res.json(response)
    })
}