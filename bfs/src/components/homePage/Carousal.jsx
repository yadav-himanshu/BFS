import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import img1 from "../../assets/carousalImg/img1.jpg";
import img2 from "../../assets/carousalImg/img2.jpg";
import img3 from "../../assets/carousalImg/img3.jpg";

const slides = [
  {
    img: img1,
    title: "Professional Security Services",
    description:
      "Our highly trained guards provide unmatched security for residential, commercial, and event-based requirements. With a focus on reliability and vigilance, we ensure the utmost safety for you and your assets.",
  },
  {
    img: img2,
    title: "Executive Bodyguard",
    description:
      "Experience premium protection with our elite executive bodyguards. Trained in advanced security protocols, they ensure your personal safety and peace of mind, adapting to dynamic environments seamlessly.",
  },
  {
    img: img3,
    title: "Housekeeping Services",
    description:
      "Enjoy a pristine and organized space with our exceptional housekeeping staff. From daily cleaning to specialized tasks, our team is committed to maintaining the highest standards of cleanliness and efficiency.",
  },
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-[450px] overflow-hidden text-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-100 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white gap-2 max">
            <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            <p className="text-sm md:text-md max-w-[600px] text-gray-100">
              {slide.description}
            </p>
            {/* <button className='px-4 py-2 mt-2 bg-blue-500 rounded-md hover:bg-blue-600'>Learn More</button> */}
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
        }
        className="p-2 rounded-full text-white bg-gray-800 bg-opacity-50 absolute z-10 left-4 top-1/2 transform -translate-y-1/2"
      >
        <CircleChevronLeft size={24} />
      </button>

      <button
        onClick={() =>
          setCurrentIndex((currentIndex + 1 + slides.length) % slides.length)
        }
        className="p-2 rounded-full text-white bg-gray-800 bg-opacity-50 absolute z-10 right-4 top-1/2 transform -translate-y-1/2"
      >
        <CircleChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousal;
