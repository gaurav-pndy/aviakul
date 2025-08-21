// src/components/OurPrograms.jsx
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { SiDrone } from "react-icons/si";

export default function OurImpact() {
  const programs = [
    {
      id: 1,
      title: "1,000+ Students",
      icon: <FaGraduationCap />,
      iconBg: "bg-blue-500",
      description:
        "Through our Aviation Education & Career Guidance programs, Aviakul has reached over 1,000 students across Delhi, Uttar Pradesh, and Rajasthan— inspiring the next generation of aviation professionals and building India's future talent pipeline.",
      highlights: ["Delhi", "Uttar Pradesh", "Rajasthan"],
    },
    {
      id: 2,
      title: "20+ Drone Workshops",
      icon: <SiDrone />,
      iconBg: "bg-green-500",
      description:
        "Through hands-on drone workshops in schools and universities, we are nurturing aviation passion at the grassroots – offering practical exposure to UAV technology, drone assembly applications, and future career pathways.",
      highlights: ["UAV Technology", "Drone Assembly", "Career Pathways"],
    },
    {
      id: 3,
      title: "Centre for Drone Excellence (CODE)",
      icon: <FaUniversity />,
      iconBg: "bg-purple-500",
      description:
        "In partnership with Mewar University, Rajasthan, we established the Centre for Drone Excellence to advance research, innovation, and skill development in next-gen UAV technologies.",
      highlights: ["Research", "Innovation", "Skill Development"],
      partner: "Mewar University, Rajasthan",
    },
    {
      id: 4,
      title: "Scholarships & Mentorship",
      icon: <FaHandsHelping />,
      iconBg: "bg-orange-500",
      description:
        "Supporting the dreams of aspiring aviation professionals each year with financial aid and mentorship pathways.",
      highlights: ["Financial Aid", "Mentorship", "Career Support"],
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
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turning vision into measurable change
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              className="bg-white group py-4"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div
                  className={`bg-accent w-14 h-14  flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{program.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 group-hover:text-accent transition-colors duration-300">
                    {program.title}
                  </h3>
                  {program.partner && (
                    <div className="flex items-center text-accent mt-1">
                      <FaMapMarkerAlt className="mr-1 text-sm" />
                      <span className="text-sm font-medium">
                        {program.partner}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg font-[300] leading-relaxed mb-6">
                {program.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
