const Stats = () => (
    <div className="py-5 md:py-10 px-3 bg-white text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          { label: "Years of Experience", value: "10+" },
          { label: "Satisfied Clients", value: "500+" },
          { label: "Projects Completed", value: "1200+" },
          { label: "Response Time", value: "24 Hours" },
        ].map((stat) => (
          <div key={stat.label} className="p-4 border rounded-md">
            <h3 className="text-2xl font-bold text-yellow-600">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
  export default Stats;
  