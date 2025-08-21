// src/components/BoardOfDirectors.jsx
import { motion } from "framer-motion";

export default function BoardOfDirectors() {
  const directors = [
    {
      name: "Mr. Andy Kotwani",
      designation: "Chairman",
      org: "Aviakul Group of Companies",
    },
    {
      name: "Mr. Vaibhav Varun",
      designation: "Managing Director",
      org: "Aviakul Group of Companies",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 xl:px-24">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-4 text-gray-900">
            {" "}
            Board of Directors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic guidance from industry leaders committed to aviation
            excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Placeholder for profile image */}
              <div className="w-96 h-96 bg-gray-200  mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photo</span>
              </div>

              <h3 className="text-2xl mb-2 lg:text-3xl font-medium text-gray-900">
                {director.name}
              </h3>
              <p className="text-lg lg:text-xl   mb-2 italic text-accent">
                {director.designation}
              </p>

              <p className="text-lg lg:text-xl font-[300] leading-relaxed">
                {director.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
