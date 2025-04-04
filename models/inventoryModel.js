const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    // Defines whether the donation is blood or organ
    donationType: {
      type: String,
      required: [true, "Donation type is required"],
      enum: ["blood", "organ"],
    },

    // Inventory Type (Incoming donation or Outgoing use)
    inventoryType: {
      type: String,
      required: [true, "Inventory type is required"],
      enum: ["in", "out"],
    },

    // Blood Group (Required only if donationType is 'blood')
    bloodGroup: {
      type: String,
      enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
      required: function () {
        return this.donationType === "blood";
      },
    },

    // Organ Type (Required only if donationType is 'organ')
    organType: {
      type: String,
      enum: [
        // Deceased Donation
        "Heart",
        "Lungs (Both or Single)",
        "Liver (Can be split and donated to two recipients)",
        "Kidneys (Both can be donated)",
        "Pancreas (Can be donated fully or partially)",
        "Intestines",

        // Living Donation
        "One Kidney",
        "Part of the Liver",
        "One Lung or a Lobe of a Lung",
        "Part of the Pancreas",
        "Part of the Intestine",
      ],
      required: function () {
        return this.donationType === "organ";
      },
    },

    // Quantity (In pints for blood, or count for organs)
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: 1,
    },

    // Organization managing the donation
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Organization is required"],
    },

    // Hospital (Required if inventoryType is 'out')
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },

    // Donor (Required if inventoryType is 'in')
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
