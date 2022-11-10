const express = require("express")
const router = express.Router()
const inventorysController = require("../controllers/inventorys.controller")

router.post("/", inventorysController.create)
router.get("/", inventorysController.find)
router.get("/:id", inventorysController.findOne)
router.put("/:id", inventorysController.update)
router.delete("/:id", inventorysController.remove)

module.exports = router