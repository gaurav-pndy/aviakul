// src/components/BusinessesSection.jsx
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaVideo,
  FaCog,
  FaBalanceScale,
  FaBuilding,
  FaPlane,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function BusinessesSection() {
  const businesses = [
    {
      icon: <FaGraduationCap className="text-5xl" />,
      title: "Aviakul Aviation Academy",
      description:
        "World-class aviation training using certified curriculum and advanced technologies.",
    },
    {
      icon: <FaVideo className="text-5xl" />,
      title: "TBBT Media Solutions LLP",
      description:
        "Building our journey towards impactful events, media, and digital solutions that connect leaders and shape global conversations.",
    },
    {
      icon: <FaCog className="text-5xl" />,
      title: "Aviakul Systems",
      description:
        "Working towards developing advanced, self-reliant aviation technologies — from operational systems to future indigenous platforms — to support India's global aviation journey.",
    },
    {
      icon: <FaBalanceScale className="text-5xl" />,
      title: "B. L Das and Co.",
      description:
        "Specialized legal services for aviation, compliance, licensing, strategic consultation and corporate governance.",
    },
    {
      icon: <FaBuilding className="text-5xl" />,
      title: "The TAU Studio - Real Estate & Infrastructure",
      description:
        "Shaping aviation infrastructure with expertise in airport, hangar, terminal, and real estate development.",
    },
    {
      icon: <FaPlane className="text-5xl" />,
      title: "AV Global Trading Co.",
      description:
        "Providing end-to-end aircraft trading, leasing, and asset management solutions / services to optimize aviation portfolios globally.",
    },
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: "Pasovit Technologies Private Limited",
      description:
        "Delivering advanced simulation, digital aviation solutions, and integrated software development to drive innovation and growth in aviation.",
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Centre for Scientific Outreach (CSO)",
      description:
        "Promoting aviation education and awareness through community programs, STEM initiatives, and career guidance.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="businesses"
      className="bg-white text-gray-900 py-20 px-4  md:px-6 lg:px-8 xl:px-24"
    >
      <div className=" mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-4 mb-6 text-gray-600 text-sm tracking-wider uppercase"
          >
            <div className="w-12 h-px bg-gray-400"></div>
            <span>Our Businesses</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-medium mb-6 text-gray-900">
            Eight Verticals. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4868c6] to-[#081e5f]">
              One Vision.
            </span>
          </h2>

          <p className="md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our eight specialized divisions work in perfect synergy to address
            every dimension of the aviation industry — Together, we're building
            a connected, capable, and future-ready aviation ecosystem for India
            and the world.
          </p>
        </motion.div>

        {/* Businesses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10"
        >
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group  py-2 md:py-4  transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                className="text-[#1c3687] mb-4 group-hover:text-[#081e5f] transition-colors duration-300"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {business.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-medium  mb-1 text-gray-900 group-hover:text-accent transition-colors duration-300">
                {business.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800   leading-relaxed  transition-colors duration-300">
                {business.description}
              </p>

              {/* Subtle Animation Line */}
              <motion.div className="w-0 h-px bg-gradient-to-r from-[#1c3687] to-transparent mt-4 group-hover:w-full transition-all duration-500"></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-4 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3">
            <span className="">Explore All Businesses</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
