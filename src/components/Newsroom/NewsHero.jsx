import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="bg-blue-50 pb-5 pt-28  px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6 text-gray-600 text-sm tracking-wider uppercase">
            <div className="w-12 h-px bg-gray-400"></div>
            <span>Newsroom</span>
            <div className="w-12 h-px bg-gray-400"></div>
          </div>

          <p className="md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore Aviakul's Global Newsroom - Where Industry Leaders,
            Innovation and Impact Coverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
