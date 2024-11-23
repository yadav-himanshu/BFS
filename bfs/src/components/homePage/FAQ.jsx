function FAQ() {
  return (
    <div className="py-5 md:py-10 px-3 bg-blue-50">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {[
          {
            question: "What services do you offer?",
            answer:
              "We provide cleaning, maintenance, and pest control services.",
          },
          {
            question: "How can I contact you?",
            answer:
              "You can reach us through our Contact page or by calling us directly.",
          },
          {
            question: "Do you offer customized packages?",
            answer: "Yes, we tailor our services to your needs.",
          },
        ].map((faq, index) => (
          <div key={index} className="mb-4">
            <button className="text-lg font-semibold text-left w-full text-yellow-700">
              {faq.question}
            </button>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
