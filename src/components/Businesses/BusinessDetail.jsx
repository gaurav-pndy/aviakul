// src/components/BusinessDetail.jsx
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaPlane,
  FaCertificate,
  FaUserTie,
  FaCompass,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaBullhorn,
  FaCamera,
  FaCog,
  FaLaptop,
  FaNetworkWired,
  FaBalanceScale,
  FaFileContract,
  FaShieldAlt,
  FaBuilding,
  FaTools,
  FaExchangeAlt,
  FaHandshake,
  FaChartLine,
  FaLaptopCode,
  FaCode,
  FaUsers,
  FaFlask,
  FaGraduationCap as FaSTEM,
  FaUserFriends,
} from "react-icons/fa";

// Icon mapping for services
const serviceIcons = {
  // Aviation Academy
  "Private Pilot License (PPL) Training": FaPlane,
  "Commercial Pilot License (CPL) Training": FaPlane,
  "Airline Transport Pilot License (ATPL) Training": FaCertificate,
  "Instrument Rating (IR) Courses": FaCompass,
  "Type Rating Training": FaUserTie,
  "Flight Instructor Certification": FaChalkboardTeacher,
  "Certification Course in Airline & Airport Operations": FaBuilding,

  // Media Solutions
  "Event Management": FaCalendarAlt,
  "Digital Media Solutions": FaBullhorn,
  "Corporate Communications": FaCamera,

  // Systems
  "Operational Systems": FaCog,
  "Indigenous Platforms": FaLaptop,
  "System Integration": FaNetworkWired,

  // Legal
  "Aviation Law": FaBalanceScale,
  "Licensing Support": FaFileContract,
  "Corporate Governance": FaShieldAlt,

  // Real Estate
  "Airport Development": FaBuilding,
  "Hangar Construction": FaTools,
  "Terminal Design": FaUsers,

  // Trading
  "Aircraft Trading": FaExchangeAlt,
  "Leasing Solutions": FaHandshake,
  "Asset Management": FaChartLine,

  // Technology
  "Flight Simulation": FaUsers,
  "Software Development": FaCode,
  "Digital Integration": FaLaptopCode,

  // Outreach
  "STEM Programs": FaFlask,
  "Career Guidance": FaUserTie,
  "Community Outreach": FaUserFriends,
};

export default function BusinessDetail({ business }) {
  if (!business) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <p>Select a business to view details</p>
      </div>
    );
  }

  return (
    <motion.div
      key={business.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header Section with Image */}
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-start mb-4">
          <div className="   flex items-center justify-center mr-4 flex-shrink-0">
            <span className="text-3xl lg:text-5xl text-gray-900">
              {" "}
              {business.icon && <business.icon />}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-medium text-gray-900 mb-2">
              {business.name}
            </h1>
            <p className="md:text-xl text-accent font-medium mb-2">
              {business.subtitle}
            </p>
          </div>
        </div>
        {/* Business Image */}
        {business.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-64 md:h-96 l overflow-hidden mb-6 shadow-lg"
          >
            <img
              src={business.image}
              alt={`${business.name} - ${business.category}`}
              className="w-full h-full object-cover 0"
            />
          </motion.div>
        )}

        <p
          className="text-gray-700 text-lg leading-relaxed "
          dangerouslySetInnerHTML={{ __html: business.description }}
        ></p>
      </div>

      {/* Programs/Services Section */}
      {business.programs && (
        <div>
          <h2 className="text-3xl font-medium text-gray-900 mb-8">
            {business.programsTitle || "Our Services"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {business.programs.map((program, index) => {
              const IconComponent = serviceIcons[program.title] || FaCog;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white  lg:p-6 "
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#1c3687]/10 group-hover:bg-[#1c3687]/20  flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <IconComponent className="text-accent text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl  text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
                        {program.title}
                      </h3>
                      {program.description && (
                        <p className="text-gray-600 leading-relaxed ">
                          {program.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subtle hover indicator */}
                  <div className="w-0 h-px bg-gradient-to-r from-accent to-transparent mt-4 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#1c3687]/5 via-[#081e57]/5 to-[#1c3687]/10 p-4 md:p-8 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#1c3687] rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#081e57] rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-lg md:text-2xl font-medium text-gray-900 mb-4">
            {business.ctaTitle || "Ready to Get Started?"}
          </h3>
          <p className="text-gray-700 mb-6 text-sm md:text-base max-w-2xl mx-auto">
            {business.ctaDescription ||
              "Take the next step in your aviation journey with us."}
          </p>
          <button className="group cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3   transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3">
            <span>{business.ctaButton || "Get Started"}</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
