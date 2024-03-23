"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetailScreen = ({}) => {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const productId = params.slug;
    const fetchProduct = async (id) => {
      const prodList = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
      );
      setProductDetails(prodList.data);
    };
    fetchProduct(productId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{productDetails?.title}</h1>
          <p className="text-lg font-bold mb-2">{productDetails?.price}</p>
          <p className="text-gray-600 mb-4">
            {productDetails?.short_description}
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Full Description</h2>
            <p className="text-gray-700">{productDetails?.description}</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
