import React from "react";
import DetailComponent from "../../components/DetailComponent";

const AboutPage = () => {
  const aboutInfo = [
    {
      title: "About Our Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Our Team",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Our Mission",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mt-50">
        <DetailComponent items={aboutInfo} />
      </div>
    </div>
  );
};

export default AboutPage;
