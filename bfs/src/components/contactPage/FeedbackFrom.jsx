import React, { useState } from "react";
import emailjs from "emailjs-com";
const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);
  // const[open,setOpen]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // const isOpen=()=>{
  //     setOpen(!open)
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData.name);

    // setFormData({name:'',email:'',phone:'',message:''})

    //sensive data
    const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const YOUR_USER_ID = import.meta.env.VITE_USER_ID;

    const templateData = {
      from_name: formData.name,
      to_name: "BFS",
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateData, YOUR_USER_ID)
      .then((result) => {
        console.log("Email Send", result.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error object:", error);
        alert("Error while sending the email. Please try again later.");
      });
  };

  return (
    <div className="mx-auto my-6 px-4 max-w-[600px] w-full min-w-[250px]">
      {/* <button
            onClick={isOpen}
            className='px-4 py-2 mt-2 bg-blue-500 rounded-md hover:bg-blue-600'>{open?'Close':'Open'}
        </button> */}

      <h2 className="text-xl font-semibold">Write to us</h2>

      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-gray-100 mt-4 p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Enter your message"
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p className="text-green-700"> Your Message has been send to BFS</p>
      )}
    </div>
  );
};

export default FeedbackForm;
