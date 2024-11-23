import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ClientData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID2;
    const YOUR_USER_ID = import.meta.env.VITE_USER_ID;

    const templateData = {
        from_name: formData.name,
        to_name: 'BFS',
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        from_purpose: formData.purpose,
    };

    console.log("Template Data:", templateData);

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateData, YOUR_USER_ID)
        .then((result) => {
            console.log("Email sent successfully:", result.text);
            setFormData({ name: '', email: '', phone: '', purpose: '', message: '' });
        })
        .catch((error) => {
            console.error("Error object:", error);
            alert("Error while sending the email. Please try again later.");
        });
};


  return (
    <div className="max-w-[600px] mx-auto bg-gray-100 p-3 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Client Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Purpose</label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select a purpose</option>
            <option value="Bodyguard">Bodyguard</option>
            <option value="Security Guard">Security Guard</option>
            <option value="Cook">Cook</option>
            <option value="Housekeeping">Housekeeping</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter additional details"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientData;
