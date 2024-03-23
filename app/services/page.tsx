import React from "react";
import DetailComponent from "../../components/DetailComponent";

const ServicesPage = () => {
  const services = [
    {
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Service 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Service 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mt-50">
        <DetailComponent items={services} />
      </div>
    </div>
  );
};

export default ServicesPage;
