// src/pages/ContactPage.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaUsers,
  FaBuilding,
  FaHandsHelping,
  FaArrowRight,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 pb-5 pt-28  px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6 text-gray-600 text-sm tracking-wider uppercase">
              <div className="w-12 h-px bg-gray-400"></div>
              <span>Contact Us</span>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:pb-40 px-4 md:px-6 lg:px-8 xl:px-24 bg-white">
        <div className=" mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="justify-between"
          >
            <h2 className="text-3xl md:text-5xl font-medium mb-6 text-gray-900 l">
              Be Part of Our Growing Aviation Community
            </h2>

            <div className="prose prose-lg text-lg font-[300] leading-relaxed space-y-6">
              <p>
                “Every great journey begins with a conversation. Whether you’re
                a student, institution, business, or partner — we’d love to hear
                from you. Reach out to us for queries, collaborations, or
                partnerships across any of our verticals.”
              </p>
            </div>
          </motion.div>

          <section className="relative w-full mt-10 mx-auto flex flex-col-reverse lg:flex-row gap-6 items-center overflow-x-hidden lg:overflow-x-visible">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:max-w-[60vw] w-full h-full max-h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1580132036696-6ddfd51f0057?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full max-h-96 h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#081e5f]/40 mix-blend-multiply"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:absolute top-1/3 right-0 lg:max-w-[36rem] w-full h-full max-h-80"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661515901973-f84b14ca958a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#081e5f]/40 mix-blend-multiply"></div>
            </motion.div>
          </section>
        </div>
      </section>
      <section className="py-16 px-4  md:px-6 lg:px-8 xl:px-24">
        <div className=" mx-auto">
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-12 text-gray-900">
            Get in Touch with Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 flex flex-col justify-between"
            >
              {/* Contact Information */}
              <div className=" ">
                <div className="space-y-6">
                  <div className="flex space-x-4   ">
                    <div className="w-16 mb-2 h-16 bg-[#081e5f]/10  flex items-center justify-center">
                      <FaEnvelope className="text-accent text-3xl" />
                    </div>

                    <div>
                      <h4 className=" mb-2 ">Email</h4>
                      <a
                        href="mailto:info@aviakul.com"
                        className="text-gray-900 text-xl font-medium hover:text-accent transition-colors duration-300"
                      >
                        info@aviakul.com
                      </a>
                    </div>
                  </div>

                  <div className="flex space-x-4 space-y-4  ">
                    <div className="w-16 mb-2 h-16 bg-[#081e5f]/10  flex items-center justify-center">
                      <FaPhone className="text-accent text-3xl" />
                    </div>

                    <div>
                      <h4 className=" mb-2 ">Phone</h4>
                      <a
                        href="mailto:info@aviakul.com"
                        className="text-gray-900 text-xl font-medium hover:text-accent transition-colors duration-300"
                      >
                        +91 xxxxxxxxxx
                      </a>
                    </div>
                  </div>

                  <div className="flex space-x-4 space-y-4  ">
                    <div className="w-16 mb-2 h-16 bg-[#081e5f]/10  flex items-center justify-center">
                      <FaGlobe className="text-accent text-3xl" />
                    </div>

                    <div>
                      <h4 className=" mb-2 ">Social Media</h4>
                      <div className="flex space-x-5 ">
                        {[
                          {
                            icon: <FaLinkedin />,
                            color: "hover:text-blue-700",
                          },
                          { icon: <FaTwitter />, color: "hover:text-blue-500" },
                          {
                            icon: <FaInstagram />,
                            color: "hover:text-pink-600",
                          },
                          { icon: <FaYoutube />, color: "hover:text-red-600" },
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            className={`text-xl flex items-center justify-center text-primary ${social.color} transition-all duration-300`}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Opportunities */}
              <div className=" ">
                <h3 className="text-2xl font-medium text-center mb-4">
                  Partnership Opportunities
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: <FaBuilding />, label: "Institutions" },
                    { icon: <FaUsers />, label: "Organizations" },
                    { icon: <FaHandsHelping />, label: "Sponsors" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 text-2xl text-primary bg-blue-50  flex items-center justify-center mx-auto mb-2">
                        {item.icon}
                      </div>
                      <p className="text-sm opacity-90">{item.label}</p>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white border-2  border-[#081e5f] hover:bg-gray-100 text-primary px-6 py-3 font-semibold  duration-300 cursor-pointer transition-all  flex items-center justify-center mx-auto space-x-3"
                >
                  Partner With Aviakul
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-blue-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-blue-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300 resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="cursor-pointer w-full bg-[#1c3687] border-2 border-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-3"
                >
                  <span>Send Message</span>
                  <FaArrowRight />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16  px-4 md:px-6 lg:px-8 xl:px-24">
        <div className=" mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white  overflow-hidden"
          >
            <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9389328301772!2d77.23696977519953!3d28.541555188206893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d2517d781b1%3A0x68dd48c47be6ad58!2sAviakul%20Aviation%20Academy!5e0!3m2!1sen!2sin!4v1755768561092!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-20 px-4 md:px-6 lg:px-8 xl:px-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <FaRocket className="text-6xl mx-auto text-accent" />
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-gray-900"
          >
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#4868c6] to-[#081e5f]">
              Aviakul -
            </span>{" "}
            The Home of Aviation
          </motion.h2>
        </motion.div>
      </section>
    </div>
  );
}
