import React from "react";

const DetailComponent = ({ items }: any) => {
  return (
    <div className="container mx-auto py-8">
      {items.map((item: any, index: any) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailComponent;
