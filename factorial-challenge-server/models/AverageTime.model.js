const { Schema, model } = require("mongoose");

const averageTimeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,

    },
    value: {
      type: Number,
      required: true,
    }
  },
  {  
    timestamps: true,
  }
);

const AverageTime = model("AverageTime", averageTimeSchema);

module.exports = AverageTime;
