import { motion } from "framer-motion";
import { FaArrowRight, FaHandshake, FaUsers, FaRocket } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  MdSecurity,
  MdStars,
  MdLightbulb,
  MdPeople,
  MdVisibility,
  MdFlag,
} from "react-icons/md";

export default function CorePhilosophy() {
  const coreValues = [
    {
      icon: <MdSecurity className="text-5xl" />,
      title: "Integrity",
      description:
        "Maintaining the highest standards of integrity, accountability, and transparency as the foundation to deliver trustworthy aviation solutions across all our operations.",
    },
    {
      icon: <MdStars className="text-5xl" />,
      title: "Excellence",
      description:
        "Delivering world-class excellence across every vertical—from the smallest detail to the largest vision—ensuring superior results, lasting value, and consistent impact in all we do.",
    },
    {
      icon: <MdLightbulb className="text-5xl" />,
      title: "Innovation",
      description:
        "Driving the future of aviation through future-ready innovations and cutting-edge digital solutions.",
    },
    {
      icon: <MdPeople className="text-5xl" />,
      title: "Community",
      description:
        "Fostering connections and opportunities through meaningful outreach that inspires learning, shared progress and societal development.",
    },
    {
      icon: <BiWorld className="text-5xl" />,
      title: "Global Perspective, Local Commitment",
      description:
        "Applying global standards while being committed to India's aviation growth and grassroots-level development.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-blue-50 text-gray-900 py-20 px-4 md:px-6 lg:px-8 xl:px-24">
      <div className=" mx-auto">
        {/* Philosophy Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <span>Core Philosophy</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </motion.div>

          <blockquote className="text-xl md:text-3xl  text-primary mb-8 max-w-4xl mx-auto leading-relaxed">
            "Aviakul is building the{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#4868c6] to-[#081e5f]">
              Home of Aviation
            </span>{" "}
            – an inclusive ecosystem that connects people, drives innovation,
            and fosters sustainable growth."
          </blockquote>

          <p className="md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore partnership opportunities. Discover our services. Or take
            your aviation career to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-[#1c3687] hover:bg-[#081e5f] cursor-pointer text-white px-6 py-3   transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg">
              <span>Explore Our Businesses</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white hover:bg-blue-100 cursor-pointer border-2 border-accent hover:border-primary text-accent hover:text-primary px-6 py-3  transition-all duration-300 flex items-center space-x-2">
              <FaHandshake />
              <span>Partner With Us</span>
            </button>
            <button className="group bg-white hover:bg-blue-100 cursor-pointer border-2 border-accent hover:border-primary text-accent hover:text-primary px-6 py-3  transition-all duration-300 flex items-center space-x-2">
              <FaUsers />
              <span>Join Aviakul</span>
            </button>
          </div>
        </motion.div>

        {/* Vision & Mission Section with Alternating Layout */}
        <div className="mb-20 space-y-0 overflow-x-hidden overflow-y-hidden">
          {/* Vision - Content Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center"
          >
            <motion.div
              transition={{ duration: 0.3 }}
              className="group  lg:pr-10 text-left lg:text-right transition-all duration-300"
            >
              <div className="flex items-center lg:justify-end mb-2">
                <MdVisibility className="text-4xl lg:text-5xl text-primary mr-4" />
                <h3 className="text-2xl lg:text-3xl font-medium text-gray-900">
                  Vision
                </h3>
              </div>
              <p className=" text-lg lg:text-xl font-[300] leading-relaxed">
                <b>AVIAKUL</b> – an amalgamation of 'Avia' (Flight) and 'Kul'
                (Home) – was established in 2020 with a sincere commitment to
                building a self-reliant aerospace ecosystem. Guided by a vision
                to be the home of aviation, we aspire to connect people, nurture
                talent, inspire innovation, and contribute to sustainable growth
                – strengthening India's position as a global leader in aviation
                while staying rooted in collaboration and community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="overflow-hidden "
            >
              <img
                src="https://images.unsplash.com/photo-1713327023763-443138affb19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern aviation facility representing Aviakul's vision"
                className="w-full h-52 md:h-72 lg:h-[25rem] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Mission - Image Left, Content Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="overflow-hidden  lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Aircraft formation representing Aviakul's mission for aerospace transformation"
                className="w-full h-52 md:h-72 lg:h-[25rem] object-cover"
              />
            </motion.div>

            <motion.div
              transition={{ duration: 0.3 }}
              className="group lg:pl-10 lg:order-2"
            >
              <div className="flex items-center mb-2">
                <MdFlag className="text-4xl lg:text-5xl text-primary mr-4" />
                <h3 className="text-2xl lg:text-3xl font-medium text-gray-900">
                  Mission
                </h3>
              </div>
              <p className=" text-lg lg:text-xl font-[300] leading-relaxed">
                At Aviakul – the Home of Aviation – we work to pioneer India's
                aerospace transformation by delivering integrated solutions
                across training, technology, legal advisory, real estate, media,
                trade, and community outreach. Guided by our pillars of
                personnel, network, and indigenous development, we aim to build
                a resilient, innovative, and globally competitive aviation
                ecosystem that strengthens self-reliance and connects India to
                the world.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 text-gray-900 text-center">
            Our Core Values
          </h2>
          <p className="md:text-lg text-gray-600 text-center max-w-4xl mx-auto">
            The principles that guide the Aviakul Group reflect our commitment
            to shaping a self-reliant, connected, and future-ready aviation
            ecosystem.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group  md:p-8  h-full"
            >
              {/* Icon */}
              <motion.div
                className="text-accent md:mb-6 group-hover:text-primary transition-colors duration-300 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {value.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-4 text-gray-900 group-hover:text-accent transition-colors duration-300 text-center">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                {value.description}
              </p>

              {/* Subtle Animation Line */}
              <motion.div className="w-0 h-px bg-gradient-to-r from-accent to-transparent mt-6 mx-auto group-hover:w-full transition-all duration-500"></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
