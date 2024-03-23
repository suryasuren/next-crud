import connectMongo from "../../../../utils/connectMongo";
import ProductModel from "../../../../models/productModel";

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const productData = await ProductModel.findOne({ _id: params.id });
    return Response.json(productData);
  } catch (err) {
    return Response.json({ message: err.message });
  }
}
