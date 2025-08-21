// src/components/ThoughtLeadership.jsx
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

export default function ThoughtLeadership() {
  const articles = [
    {
      id: 1,
      category: "CEO Insights",
      categoryColor: "bg-blue-100 text-blue-700",
      readingTime: "5 min read",
      title: "The Future of Sustainable Aviation: A CEO Perspective",
      excerpt:
        "As we navigate towards carbon-neutral skies, industry leaders must embrace innovative technologies and collaborative partnerships to achieve our climate goals.",
      author: {
        initials: "RK",
        name: "Rajesh Kumar",
        role: "CEO, Aviakul",
      },
      date: "March 14, 2025",
      link: "/insights/sustainable-aviation-ceo-perspective",
    },
    {
      id: 2,
      category: "Expert Column",
      categoryColor: "bg-green-100 text-green-700",
      readingTime: "7 min read",
      title: "Digital Transformation in Aviation MRO",
      excerpt:
        "Exploring how AI, IoT, and predictive analytics are revolutionizing aircraft maintenance operations across the industry.",
      author: {
        initials: "PS",
        name: "Dr. Priya Sharma",
        role: "Head of Technology",
      },
      date: "March 12, 2025",
      link: "/insights/digital-transformation-mro",
    },
    {
      id: 3,
      category: "Policy Talks",
      categoryColor: "bg-purple-100 text-purple-700",
      readingTime: "6 min read",
      title: "India's Growing Role in Global Aviation",
      excerpt:
        "Analyzing policy developments and market trends that position India as a key player in the international aviation landscape.",
      author: {
        initials: "AV",
        name: "Amit Verma",
        role: "Policy Advisor",
      },
      date: "March 10, 2025",
      link: "/insights/india-global-aviation-role",
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
    <section className="py-16 px-4 md:px-6 lg:px-8 xl:px-24">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-4 text-gray-900">
            Thought Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights from industry leaders shaping the future of aviation and
            aerospace
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="bg-white border border-gray-200 p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Category and Reading Time */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full bg-[#1c3687] text-white`}
                >
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-xs">
                  <FaClock className="mr-1" />
                  {article.readingTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-[300] text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Author and Date */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white  text-sm">
                    {article.author.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                <time className="text-xs text-gray-500">{article.date}</time>
              </div>

              {/* Read More Link */}
              <motion.a
                href={article.link}
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-accent font-medium text-sm mt-4 group-hover:text-primary transition-colors duration-300"
              >
                <span>Read Article</span>
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
