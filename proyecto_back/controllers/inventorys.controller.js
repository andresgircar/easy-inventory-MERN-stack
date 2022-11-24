const Inventory = require("../models/inventorys.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let inventory = new Inventory({
        inventory_id: req.body.inventory_id,
        producto: req.body.producto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        ubicacion: req.body.ubicacion,
        cantidad: req.body.cantidad,
        costo: req.body.costo
    })

    inventory.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar Inventario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Inventario se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Inventory.find(function(err, inventorys){
        res.json(inventorys)
    })
}

exports.findOne = function(req,res){
    Inventory.findOne({_id: req.params.id},function(err, inventory){
        res.json(inventory)
    })
}

exports.update = function(req,res){
    let inventory = {
        inventory_id: req.body.inventory_id,
        producto: req.body.producto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        familia: req.body.familia,
        cantidad : req.body.cantidad,
        costo : req.body.costo
    }

    Inventory.findByIdAndUpdate(req.params.id, {$set: inventory}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar Inventario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Inventario modificado correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Inventory.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el Inventario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Inventario eliminado correctamente"
        res.json(response)
    })
}