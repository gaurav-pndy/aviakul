// src/components/FooterTeaser.jsx
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function FooterTeaser() {
  return (
    <section className="relative  text-gray-900 py-20 px-4 md:px-6 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-24 h-24 bg-primary/10 rounded-full blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/5 rounded-full blur-md"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <FaRocket className="text-6xl mx-auto text-accent" />
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-gray-900"
          >
            The New Face of{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#4868c6] to-[#081e5f]">
              Indian Aviation
            </span>{" "}
            Starts Here
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10"
          >
            Aviakul Group is the trusted partner in shaping aviation's next
            chapter.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button className="group cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-10 py-4  md:text-lg transition-all duration-300 flex items-center mx-auto space-x-3 shadow-lg hover:shadow-xl">
              <span>Begin Your Aviation Journey</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-2 border-gray-300 rounded-full relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
