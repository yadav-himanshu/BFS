import img1 from "../../assets/featuredImg/img1.jpg";
import img2 from "../../assets/featuredImg/img2.jpg";
import img3 from "../../assets/featuredImg/img3.jpg";

const FeaturedServices = () => (
  <div className="py-5 md:py-10 px-3 bg-gray-100">
    <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
      Our Featured Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        {
          title: "Residential Cleaning",
          description: "Comprehensive cleaning for your home.",
          img: img1,
        },
        {
          title: "Office Maintenance",
          description: "Keep your workplace spotless and functional.",
          img: img2,
        },
        {
          title: "Pest Control",
          description: "Effective solutions for a pest-free environment.",
          img: img3,
        },
      ].map((service) => (
        <div
          key={service.title}
          className="p-4 bg-white rounded-md shadow-md text-center"
        >
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src={service.img}
            alt={service.title}
          />
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);
export default FeaturedServices;
