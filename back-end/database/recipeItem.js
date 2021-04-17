const mongoose = require("mongoose");

const recipeItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: { type: Array, required: true },
    steps: { type: Array, required: true },
    time: { type: Number, required: true },
    imageURL: { type: String, required: true },
    originalURL: { type: String, required: true },
  },
  { timestamps: true }
);

const RecipeItem = mongoose.model("RecipeItem", recipeItemSchema);

module.exports = RecipeItem;
