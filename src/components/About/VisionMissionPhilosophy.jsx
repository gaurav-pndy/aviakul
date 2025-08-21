// src/components/VisionMissionPhilosophy.jsx
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";
import { MdFlag, MdVisibility } from "react-icons/md";

export default function VisionMissionPhilosophy() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 xl:px-24 bg-blue-50">
      <div className=" space-y-20">
        {/* Vision - Content Left, Image Right */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group flex flex-col lg:flex-row justify-between transition-all duration-300"
        >
          <div className="flex lg:flex-col items-center lg:items-start lg:w-[20%]   mb-2">
            <MdVisibility className="text-3xl lg:text-4xl text-primary mr-4" />
            <h3 className="text-xl lg:text-2xl font-medium text-gray-900">
              Our Vision
            </h3>
          </div>
          <p className=" lg:w-[80%] text-lg  font-[300] leading-relaxed">
            To be recognized as the <b>Home of Aviation</b> — a global hub that
            connects people, nurtures talent, inspires innovation, and drives
            sustainable growth. Aviakul envisions building a{" "}
            <b>self-reliant, future-ready aerospace ecosystem</b>, positioning
            India as a world leader in aviation while staying rooted in{" "}
            <b>community, collaboration, and excellence</b>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group flex flex-col lg:flex-row justify-between transition-all duration-300"
        >
          <div className="flex lg:flex-col items-center lg:items-start lg:w-[20%] mb-2">
            <MdFlag className="text-3xl lg:text-4xl text-primary mr-4" />
            <h3 className="text-xl lg:text-2xl font-medium text-gray-900">
              Our Mission
            </h3>
          </div>
          <div className=" lg:w-[80%] text-lg  font-[300] leading-relaxed">
            <p>
              At Aviakul, our mission is to{" "}
              <b>pioneer India’s aviation transformation</b> by delivering{" "}
              <b>integrated, end-to-end solutions</b> across training, legal
              services, trade, real estate, media, technology, and outreach. We
              are committed to:
            </p>

            <ul className="list-disc list-outside ml-6">
              <li>
                <b>Educating & empowering skilled professionals</b> through
                world-class training.
              </li>
              <li>
                <b>uilding indigenous capabilities</b> that promote Atmanirbhar
                Bharat (self-reliance).
              </li>
              <li>
                <b>Creating global platforms for dialogue and collaboration</b>{" "}
                through events, research, and outreach.
              </li>
              <li>
                {" "}
                <b> Developing infrastructure and solutions</b> that strengthen
                aviation at every level — from grassroots awareness to
                international partnerships.
              </li>
            </ul>
            <p>
              Every step we take is guided by our values of{" "}
              <b>integrity, excellence, innovation, and impact</b>, ensuring we
              not only meet industry needs today but also shape the aviation of
              tomorrow.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group flex flex-col lg:flex-row justify-between transition-all duration-300"
        >
          <div className="flex  lg:flex-col items-center lg:items-start lg:w-[20%]   mb-2">
            <FaLightbulb className="text-3xl lg:text-4xl text-primary mr-4" />
            <h3 className="text-xl lg:text-2xl font-medium text-gray-900">
              Our Philosophy
            </h3>
          </div>
          <div className=" lg:w-[80%] text-lg  font-[300] leading-relaxed">
            <p>
              At Aviakul, our philosophy is rooted in the belief that aviation
              is not just an industry, but an{" "}
              <b>ecosystem of people, innovation, and opportunity</b>. The
              principles that guide our approach to business and industry
              leadership:
            </p>

            <ul className="list-disc list-outside ml-6">
              <li>
                <b>Ecosystem Approach – </b> We believe in creating synergies
                across all aviation sectors through our integrated verticals,
                building one connected ecosystem.
              </li>
              <li>
                <b>Inclusivity – </b> Our programs and services are designed to
                be accessible to diverse communities and future generations,
                enabling all to participate in and benefit from aviation
                opportunities.
              </li>
              <li>
                <b>Holistic Growth – </b> We focus on building sustainable
                aviation solutions that benefit all stakeholders in the aviation
                ecosystem while advancing global competitiveness.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
