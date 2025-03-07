import React, { useState } from "react";
import emailjs from "emailjs-com";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide popup after 3s
      })
      .catch((error) => console.error("Email Error:", error));

    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <div className="max-w-[650px] mx-auto mt-10 p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Drop a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-white font-semibold"
        >
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {submitted && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          ✅ Message Submitted Successfully!
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
