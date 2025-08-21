// src/components/Header.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    if (location.pathname !== "/") {
      setIsScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Businesses", path: "/our-businesses" },
    { name: "About Aviakul", path: "/about-aviakul" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Community & Outreach", path: "/community-outreach" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <motion.header
        initial={{ backgroundColor: "rgba(23, 59, 107, 0)" }}
        animate={{
          backgroundColor: isScrolled ? "#fff" : "rgba(23, 59, 107, 0)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-none"
        }`}
      >
        <div className=" mx-auto flex justify-between items-center px-4 md:px-8 xl:px-28 py-4 md:py-6">
          <Link
            to="/"
            className={`font-bold text-lg md:text-xl lg:text-2xl tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            <Logo customClasses={isScrolled ? "text-primary" : "text-white"} />
          </Link>

          {/* Desktop Menu */}
          <nav
            className={`hidden lg:flex space-x-6 lg:space-x-8 font-medium uppercase text-xs ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => {
                  const base =
                    "inline-block pb-1 transition-[background-size] duration-300 ease-out whitespace-nowrap";
                  const underline =
                    "bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[position:50%_100%] bg-[length:0%_2px] hover:bg-[length:100%_2px]";
                  const active = "bg-[length:100%_2px]";

                  return isActive
                    ? `${base} ${underline} ${active}`
                    : `${base} ${underline}`;
                }}
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            className={`lg:hidden text-xl focus:outline-none transition-colors duration-300 p-2 relative z-50 ${
              menuOpen
                ? "text-white"
                : isScrolled
                ? "text-primary"
                : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "2%" }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
              className="fixed top-0 right-0 h-screen w-[90%] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header with Close Button */}
                <div className="bg-gradient-to-r from-primary to-accent p-6  relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-medium tracking-wide">Menu</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setMenuOpen(false)}
                      className=" rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                      aria-label="Close menu"
                    >
                      <FaTimes className="text-2xl" />
                    </motion.button>
                  </div>
                </div>
                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto">
                  <ul className="py-6">
                    {navItems.map(({ name, path }, index) => (
                      <motion.li
                        key={name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <NavLink
                          to={path}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            `block px-8 py-5 text-lg font-medium transition-all duration-300 border-l-4 ${
                              isActive
                                ? "border-primary text-primary bg-blue-50 font-semibold"
                                : "border-transparent text-gray-700 hover:border-accent hover:text-accent hover:bg-gray-50"
                            }`
                          }
                        >
                          <span className="block">{name}</span>
                          {name === "Our Businesses" && (
                            <span className="text-xs text-gray-500 mt-1 block">
                              Explore our 8 verticals
                            </span>
                          )}
                          {name === "Community & Outreach" && (
                            <span className="text-xs text-gray-500 mt-1 block">
                              STEM & Education initiatives
                            </span>
                          )}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                \
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
