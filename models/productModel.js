import mongoose, { model, models } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: String,
  },
  { toJSON: { virtuals: true } }
);

productSchema.virtual("short_description").get(function () {
  return this.description.substring(0, 25) + "...";
});

const ProductModel = models.product || model("product", productSchema);

export default ProductModel;
