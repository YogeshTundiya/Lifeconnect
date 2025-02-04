const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//Create Inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user Not found");
    }
    if (inventoryType === "in" && user.role !== "donor") {
      throw new Error("Not a donor");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }
    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record added🎉",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in creating inventory API🥲",
      error,
    });
  }
};

//get all blood record
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organization: req.body.userId,
      })
      .populate("donor")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "Get all record successfully🎉",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all Inventory",
      error,
    });
  }
};
module.exports = { createInventoryController, getInventoryController };
