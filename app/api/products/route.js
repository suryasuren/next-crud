import connectMongo from "../../../utils/connectMongo";
import ProductModel from "../../../models/productModel";

export async function GET(req) {
  try {
    await connectMongo();
    const paramQuery = req.nextUrl.searchParams.get("search");

    if (paramQuery) {
      const productData = await ProductModel.find({
        $or: [
          {
            title: new RegExp(paramQuery, "i"),
          },
          {
            description: new RegExp(paramQuery, "i"),
          },
        ],
      });

      return Response.json(productData);
    } else {
      const productData = await ProductModel.find({});

      return Response.json(productData);
    }
  } catch (err) {
    return Response.json({ message: err.message });
  }
}

export async function POST(req, res) {
  try {
    await connectMongo();
    const requestedData = await req.json();
    const { title, description, price } = requestedData;
    await ProductModel.create({ title, description, price });
    return Response.json({ message: "Product Created Successfully" });
  } catch (err) {
    return Response.json({ message: err.message });
  }
}
