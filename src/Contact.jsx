import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = "service_dsa1n5i";
    const TEMPLATE_ID = "template_9wasutw";
    const PUBLIC_KEY = "pi2MysGFvXWqBo0WU";

    // Map the formData to match the template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white flex flex-col items-center justify-center py-20 px-6">
      <h1 className="text-[10vw] md:text-[5vw] font-extrabold font-heading text-emerald-300 uppercase tracking-tight mb-12 text-center">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6 bg-emerald-400/10 backdrop-blur-xl border border-emerald-300/30 shadow-lg rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-4">
            Feel free to reach out via email, phone, or the contact form.
          </p>
          <div className="flex items-center gap-3 text-gray-200 hover:text-emerald-400 cursor-pointer">
            <MapPin className="w-5 h-5" /> <span>Telangana, India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200 hover:text-emerald-400 cursor-pointer">
            <Phone className="w-5 h-5" /> <span>+91 9182053783</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200 hover:text-emerald-400 cursor-pointer">
            <Mail className="w-5 h-5" /> <span>kalluribablu921@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-emerald-400/10 backdrop-blur-xl border border-emerald-300/30 shadow-lg rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-emerald-900/50 border border-emerald-300/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-emerald-900/50 border border-emerald-300/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="w-full p-4 rounded-xl bg-emerald-900/50 border border-emerald-300/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
            >
              Send Message
            </button>
            {status && <p className="text-center mt-2 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
