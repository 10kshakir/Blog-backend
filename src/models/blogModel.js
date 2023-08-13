
const mongoose = require("mongoose");

const DataSchema =new mongoose.Schema(
      {
            Title: {
                  type: String,
                  required: true,
                  uppercase: true,
                  trim:true
            },
            Content: {
                  type: String,
                  required: true
            },
            Author: {
                  type: String,
                  required: true
            },
            createdAt: {
                  type: Date,
                  default: Date.now()
            }

      },
      { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("Blogs", DataSchema);
module.exports = ProductModel;