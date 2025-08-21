// src/components/CommunityOutreach.jsx
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaArrowRight,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

export default function ScientificOutreach() {
  return (
    <section className="py-16 lg:pb-40 px-4 md:px-6 lg:px-8 xl:px-24 bg-white">
      <div className="mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-xl md:text-3xl mb-6 text-gray-900 l">
            Grassroots Education & Global Platforms
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center  space-x-3"
            >
              <FaHandsHelping />
              <span>Get Involved</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 border-2 border-[#1c3687] hover:border-[#081e5f] text-[#1c3687] hover:text-[#081e5f] px-8 py-3  cursor-pointer transition-all duration-300 flex items-center space-x-2"
            >
              <FaUsers />
              <span>Partner With US</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Centre for Scientific Outreach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                  Centre for Scientific Outreach
                </h2>
              </div>

              <div className="prose prose-lg text-lg font-[300] leading-relaxed space-y-4">
                <p>
                  Our <strong>Centre for Scientific Outreach</strong> serves as
                  the cornerstone of Aviakul Group's commitment to community
                  engagement and educational advancement. We believe that by
                  nurturing curiosity and providing access to aviation
                  knowledge, we can inspire the next generation of aviation
                  professionals.
                </p>

                <p>
                  Through strategic partnerships with educational institutions,
                  community organizations, and government bodies, we deliver
                  comprehensive programs that make aviation education accessible
                  to all, regardless of background or geographic location.
                </p>

                <p>
                  Our initiatives focus on{" "}
                  <strong>
                    STEM education, career guidance, hands-on learning
                    experiences, and scholarship opportunities
                  </strong>{" "}
                  that create pathways for students to enter the aviation
                  industry.
                </p>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1661512251519-6e22fde220bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
