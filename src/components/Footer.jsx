import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Businesses", path: "/our-businesses" },
    { name: "About Aviakul", path: "/about-aviakul" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Community & Outreach", path: "/community-outreach" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className=" mx-auto px-4 md:px-6 lg:px-8 xl:px-32 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Logo customClasses={"text-white"} />{" "}
            <p className="text-gray-300 mt-6 mb-8 leading-relaxed max-w-md">
              The Home of Aviation — Building India's future-ready aerospace
              ecosystem through innovation, excellence, and community.
            </p>
            {/* Contact */}
            <div className="flex items-center text-gray-300 mb-6">
              <FaEnvelope className="mr-3" />
              <a
                href="mailto:info@aviakul.com"
                className="hover:text-white transition-colors duration-300"
              >
                info@aviakul.com
              </a>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20  flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-mdeium mb-6">Quick Links</h4>
            <div className="grid  gap-y-2 gap-x-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300  hover:text-white transition-colors duration-300 group flex items-center"
                >
                  <FaArrowRight className="text-xs hidden md:flex mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h4 className="text-xl font-medium mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get the latest aviation insights and updates delivered to your
              inbox.
            </p>

            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent placeholder-gray-400 text-white"
              />
              <motion.button
                className="bg-white text-primary px-6 py-3  hover:bg-gray-100 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight />
              </motion.button>
            </div>

            <div className="text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Aviakul Group. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-8 text-sm"
            >
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
