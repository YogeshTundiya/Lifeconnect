const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// import { bcrypt } from "bcryptjs";

//registration
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User is already exists",
      });
    }
    //hash Password
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hasedPassword;
    //rest data
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Register Successfully🎉",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};

//login call back
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid credential🥲",
      });
    }
    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid credential🥲",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECERT, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "Login successfull🎉",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login🥲",
      error,
    });
  }
};
module.exports = { registerController, loginController };
