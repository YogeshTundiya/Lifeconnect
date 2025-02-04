const express = require("express");
const {
  createInventoryController,
  getInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//Add inventory || POST
router.post("/create-inventory", createInventoryController);

//get all blood record
router.get("/get-inventory", authMiddleware, getInventoryController);
module.exports = router;
