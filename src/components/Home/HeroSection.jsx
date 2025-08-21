import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.querySelector("#businesses"); // target section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative xl:min-h-screen flex pt-28 lg:py-0 pb-10  items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right  lg:bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>

      {/* Bluish overlay */}
      <div className="absolute inset-0 bg-[#081e5f]/30 mix-blend-multiply"></div>

      {/* Gradient overlay (optional for depth) */}
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-[#081e5f]/90 via-[#081e5f]/50 to-transparent"></div>

      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20  max-w-screen w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-24 grid xl:grid-cols-2 lg:gap-12 lg:items-center lg:py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white lg:mt-10 space-y-6"
        >
          {/* Subtitle */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center space-x-2 text-gray-300 text-sm tracking-wider uppercase"
          >
            <div className="w-8 h-px bg-white/50"></div>
            <span>Aviation Excellence</span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-[3.5rem] font-medium  lg:leading-16"
          >
            Leading the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Future of Aviation
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-xl  text-gray-200"
          >
            Powered by Vision. Built on Purpose. Driven by Innovation.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className=" text-gray-300 leading-relaxed max-w-xl hidden lg:block"
          >
            Founded in 2020, <b> Aviakul Group</b> aims to reshape the Indian
            aviation ecosystem through integrated, future-ready solutions. With
            deep industry insight and a commitment to excellence, we operate{" "}
            <b>eight specialized verticals</b> — from{" "}
            <b>
              {" "}
              aviation training, events & media, aviation systems, legal
              advisory, real estate & infrastructure, outreach, trade to
              technology solutions
            </b>{" "}
            — delivering integrated excellence and unmatched value across the
            aviation value chain.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="pt-4"
          >
            <button className="group cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3   transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl ">
              <span>Explore Our Businesses</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 hidden lg:block left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-white/70"
        >
          {/* Mouse icon */}
          <BsMouse onClick={handleScroll} className="w-6 h-6 cursor-pointer " />

          {/* Animated line (scroll hint) */}
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
