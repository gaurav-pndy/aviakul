// src/components/GetInvolved.jsx
import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaAward, FaArrowRight } from "react-icons/fa";

export default function GetInvolved() {
  const involvementOptions = [
    {
      id: 1,
      icon: <FaUsers />,
      iconBg: "bg-blue-500",
      title: "Volunteer",
      description:
        "Share your expertise and passion for aviation with students and communities",
      buttonText: "Learn More",
      buttonStyle: "bg-accent hover:bg-primary",
    },
    {
      id: 2,
      icon: <FaHeart />,
      iconBg: "bg-red-500",
      title: "Partner",
      description:
        "Collaborate with us to expand the reach and impact of our programs",
      buttonText: "Partner With Us",
      buttonStyle: "bg-accent hover:bg-primary",
    },
    {
      id: 3,
      icon: <FaAward />,
      iconBg: "bg-green-500",
      title: "Sponsor",
      description:
        "Support scholarships and educational programs for deserving students",
      buttonText: "Sponsor Programs",
      buttonStyle: "bg-accent hover:bg-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pb-16 px-4 md:px-6 lg:px-8 xl:px-24">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-4 text-gray-900">
            Get Involved
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference in communities and shaping the future
            of aviation education
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {involvementOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={cardVariants}
              className=" text-center group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`bg-cardBg w-20 h-20  flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-white text-3xl">{option.icon}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-lg font-[300] leading-relaxed mb-8 min-h-[60px]">
                {option.description}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3   transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3 group`}
              >
                <span>{option.buttonText}</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
