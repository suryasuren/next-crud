import connectMongo from "../../../utils/connectMongo";
import ProductModel from "../../../models/productModel";

export async function GET(req) {
  try {
    await connectMongo();

    console.log(req.nextUrl.searchParams.get("search"), "req==========");

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

export async function POST(req) {
  try {
    console.log(req.body, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    await connectMongo();

    let obj = {
      title: "Jayanthi K",
      description:
        "general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this general description of the product is here le us know more about this",
      price: "123$",
    };
    await ProductModel.create(obj);

    return Response.json({ message: "Product Created Successfully" });
  } catch (err) {
    return Response.json({ message: err.message });
  }
}
