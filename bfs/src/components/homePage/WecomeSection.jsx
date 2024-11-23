import bgImg from "../../assets/welcomeBgImage.jpg";

const WelcomeSection = () => (
  <div
    className="bg-gray-50 relative bg-cover bg-center h-52 "
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div className="py-5 md:py-10 px-3 h-full w-full bg-black bg-opacity-80 absolute top-0 right-0 flex justify-center items-center text-center flex-col">
      <h2 className="text-xl text-white md:text-2xl lg:text-3xl font-bold mb-3">
        Welcome to Bombay Facility Services
      </h2>
      <p className="max-w-3xl mx-auto text-gray-100">
        We specialize in delivering high-quality facility management services to
        make your life easier. From residential cleaning to office maintenance,
        we ensure excellence at every step.
      </p>
    </div>
  </div>
);
export default WelcomeSection;
