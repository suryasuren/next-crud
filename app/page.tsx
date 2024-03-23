"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Modal from "@/components/Modal";

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProduct = async () => {
    const prodList = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );
    setProductList(prodList.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleChange = async (e: any) => {
    const searchValue = e.target.value;
    const prodList = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products?search=${searchValue}`
    );
    setProductList(prodList.data);
  };

  const modalActions = async () => {
    await fetchProduct().then(() => {
      setModalVisible(!modalVisible);
    });
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={modalActions} />

      <div className="container-full mx-20 h-screen mb-20 flex flex-col">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center">Product Search</h1>
          <div className="mt-4 flex justify-center items-center">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => handleChange(e)}
              className="px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-100"
            />
            <button
              onClick={modalActions}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2 focus:outline-none hover:bg-blue-600"
            >
              Create New
            </button>
          </div>
        </header>

        <div className="" style={{ maxHeight: "calc(100vh - 200px)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productList.map((resp: any) => (
              <div key={resp?.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl text-black font-bold mb-2">
                  {resp?.title}
                </h2>
                <p className="text-gray-600 mb-4">{resp.description}</p>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-bold">{resp.price}</span>
                  <Link href={"/product/" + resp.id}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
