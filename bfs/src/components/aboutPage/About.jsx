import React from "react";
import { FaUserShield, FaUsers, FaCheckCircle, FaLock } from "react-icons/fa";
import AboutCard from "./AboutCard";
import img1 from "../../assets/aboutImg/img2.jpg";
import img2 from "../../assets/aboutImg/img2.jpg";

const About = () => {
  const cardsData = [
    {
      icon: <FaUserShield color="black" />,
      title: "24/7 Support",
      description:
        "Our dedicated team works around the clock to ensure your safety. Whether day or night, you can count on us to provide unparalleled security services tailored to your needs.",
    },
    {
      icon: <FaUsers color="black" />,
      title: "Expert Employees",
      description:
        "Our staff is highly skilled, trained to handle complex security challenges with ease. Equipped with the latest tools and techniques, they ensure top-notch safety for clients.",
    },
    {
      icon: <FaCheckCircle color="black" />,
      title: "Verified Service",
      description:
        "As a government-approved agency, our services are reliable and trustworthy. We strictly adhere to compliance standards to provide you with the highest level of protection.",
    },
    {
      icon: <FaLock color="black" />,
      title: "Secured Service",
      description:
        "With years of expertise, we offer security solutions that give you peace of mind. Our intelligent team and advanced strategies ensure complete protection.",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="p-4 mb-6">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 text-justify space-y-4 min-w-[250px]">
            <p className="text-gray-700 max-w-[400px] indent-5">
              Welcome to Bombay Facility Service (BFS). We are a professional
              security agency offering a range of services including bodyguards,
              security guards, housekeeping, and more. Our mission is to provide
              trustworthy and reliable services to meet your unique needs.
            </p>
            <p className="text-gray-700 max-w-[400px] indent-5">
              At BFS, we pride ourselves on delivering exceptional service with
              a focus on safety and customer satisfaction. Our team of trained
              professionals is dedicated to ensuring your peace of mind through
              dependable and customized solutions.
            </p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <img
              className="max-h-[300px] w-full object-cover"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col p-4">
        <div className="flex-1 flex justify-center items-center relative">
          <img className="w-full h-[150px] object-cover" src={img2} alt="" />
          <div className="absolute text-white text-3xl font-semibold w-full h-[150px] bg-black bg-opacity-30 flex items-center justify-center">
            <h3>Why choose us</h3>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2  p-3">
            {cardsData.map((card, index) => (
              <AboutCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
