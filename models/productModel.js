import mongoose, { model, models } from "mongoose";
import moment from "moment";

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: String,
    createdAt: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true } }
);

productSchema.virtual("short_description").get(function () {
  return this.description.substring(0, 25) + "...";
});

productSchema.virtual("created_at_formatted").get(function () {
  return moment(this.createdAt).format("ddd, mm, yyyy");
});

const ProductModel = models.product || model("product", productSchema);

export default ProductModel;
