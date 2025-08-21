// src/components/FlagshipConferences.jsx
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaTag,
} from "react-icons/fa";

export default function FlagshipConferences() {
  const conferences = [
    {
      id: 1,
      title: "EAMRO 2025",
      subtitle: "Eastern Aviation & Maintenance, Repair, Operations",
      description:
        "The premier aviation MRO conference bringing together industry leaders from across Asia-Pacific.",
      dates: "April 15-17, 2025",
      location: "New Delhi, India",
      attendees: "2,500+ Expected Attendees",
      status: "Registration Open",
      statusColor: "bg-green-600",
      highlights: [
        "Sustainable Aviation",
        "Digital Transformation",
        "Supply Chain Innovation",
      ],
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "GSAC 2025",
      subtitle: "Global Space & Aviation Conference",
      description:
        "Exploring the convergence of space technology and commercial aviation.",
      dates: "June 20-22, 2025",
      location: "Mumbai, India",
      attendees: "1,800+ Expected Attendees",
      status: "Early Bird",
      statusColor: "bg-blue-600",
      highlights: [
        "Space Technology",
        "Urban Air Mobility",
        "Satellite Navigation",
      ],
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pilot Career Expo",
      subtitle: "International Pilot Career & Training Expo",
      description:
        "Connecting aspiring pilots with training academies and airline opportunities.",
      dates: "August 12-14, 2025",
      location: "Bangalore, India",
      attendees: "5,000+ Expected Attendees",
      status: "Coming Soon",
      statusColor: "bg-purple-600",
      highlights: [
        "Career Guidance",
        "Training Programs",
        "Industry Networking",
      ],
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "India-Russia Space Dialogue",
      subtitle: "India-Russia Space Technology Dialogue",
      description:
        "Bilateral discussions on space cooperation and technology transfer.",
      dates: "October 8-10, 2025",
      location: "Chennai, India",
      attendees: "800+ Expected Attendees",
      status: "Invitation Only",
      statusColor: "bg-red-600",
      highlights: [
        "Bilateral Cooperation",
        "Technology Transfer",
        "Joint Missions",
      ],
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
            Flagship Conferences & Expos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join industry leaders at our signature events that shape the future
            of aviation and aerospace.
          </p>
        </motion.div>

        {/* Conferences Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {conferences.map((conference) => (
            <motion.div
              key={conference.id}
              variants={cardVariants}
              className=" overflow-hidden group"
            >
              {/* Status Badge */}
              <div className="relative">
                <span
                  className={`absolute top-4 right-4 bg-[#1c3687]/80 text-white px-3 py-1 text-xs  rounded-full z-10`}
                >
                  {conference.status}
                </span>

                {/* Background Image */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={conference.image}
                    alt={conference.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081e5f]/50 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="py-4">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">
                    {conference.title}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">
                    {conference.subtitle}
                  </p>
                  <p className="font-[300] leading-relaxed">
                    {conference.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{conference.dates}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{conference.location}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <FaUsers className="text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{conference.attendees}</span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {conference.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        <FaTag className="mr-1 text-accent" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3  justify-center text-center  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3 group"
                >
                  <span>View All Updates</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
