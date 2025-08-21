// src/components/PressReleases.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

export default function PressReleases() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  const pressData = [
    {
      id: 1,
      tags: ["Press Release", "Partnership"],
      date: "March 15, 2025",
      title:
        "Aviakul Announces Strategic Partnership with Leading Aviation Training Institute",
      description:
        "New collaboration will enhance pilot training programs across India with state-of-the-art simulation technology.",
      downloadable: true,
      link: "/press/aviakul-partnership",
      downloadLink: "/downloads/aviakul-partnership.pdf",
    },
    {
      id: 2,
      tags: ["Media Coverage", "Coverage"],
      date: "March 14, 2025",
      title:
        'Economic Times: "Aviakul\'s EAMRO Conference Sets New Industry Standards"',
      description:
        "Leading business publication highlights the impact of EAMRO 2025 on aviation industry transformation.",
      downloadable: false,
      link: "/press/economictimes-eamro",
    },
    {
      id: 3,
      tags: ["Event Update", "Event"],
      date: "March 12, 2025",
      title:
        "GSAC 2025 Speakers Announcement: Industry Pioneers to Share Insights",
      description:
        "Confirmed speakers include CEOs from major airlines and space agencies for groundbreaking discussions.",
      downloadable: false,
      link: "/press/gsac-speakers",
    },
    {
      id: 4,
      tags: ["Press Release", "Initiative"],
      date: "March 10, 2025",
      title: "Aviakul Launches Scholarship Program for Aspiring Pilots",
      description:
        "50 scholarships worth ₹2 crores announced to support underprivileged students pursuing aviation careers.",
      downloadable: true,
      link: "/press/scholarship-program",
      downloadLink: "/downloads/scholarship-details.pdf",
    },
    {
      id: 5,
      tags: ["Media Coverage", "Coverage"],
      date: "March 8, 2025",
      title: 'Aviation Week: "India\'s Rising Role in Global MRO Services"',
      description:
        "International publication features Aviakul's initiatives in promoting India as an MRO hub.",
      downloadable: false,
      link: "/press/aviation-week-mro",
    },
  ];

  const getTagColor = (tag) => {
    const colors = {
      "Press Release": "bg-gray-800 text-white",
      "Media Coverage": "bg-blue-100 text-blue-800",
      "Event Update": "bg-green-100 text-green-800",
      Partnership: "bg-purple-100 text-purple-800",
      Initiative: "bg-orange-100 text-orange-800",
      Coverage: "bg-indigo-100 text-indigo-800",
      Event: "bg-teal-100 text-teal-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  const filteredData = pressData.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || item.tags.includes(filterType);
    const matchesCategory =
      filterCategory === "All" || item.tags.includes(filterCategory);
    return matchesSearch && matchesType && matchesCategory;
  });

  const types = ["All", "Press Release", "Media Coverage", "Event Update"];
  const categories = ["All", "Partnership", "Coverage", "Event", "Initiative"];

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
            Press Releases & Media Coverage
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest announcements and media coverage
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white  py-6 mb-8 "
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search press releases and media coverage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none bg-white border border-gray-300  px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent cursor-pointer"
                >
                  <option value="" disabled>
                    Filter by type
                  </option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300  px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent cursor-pointer"
                >
                  <option value="" disabled>
                    Filter by category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Press Releases List */}
        <div className="space-y-4">
          {filteredData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200  p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Content */}
                <div className="flex-1">
                  {/* Tags and Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs  rounded ${getTagColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <time className="text-sm text-gray-500 ml-2">
                      {item.date}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-gray-900 mb-2 hover:text-accent transition-colors duration-300 cursor-pointer">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-[300] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:gap-3">
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#1c3687] border border-accent  hover:bg-[#1c3687] hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Read More
                  </motion.a>

                  {item.downloadable && (
                    <motion.a
                      href={item.downloadLink}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300  hover:bg-gray-50 transition-colors duration-300"
                      download
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" cursor-pointer bg-[#1c3687] hover:bg-[#081e5f] text-white px-8 py-3  justify-center text-center  transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3 group"
          >
            View All Press Releases
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
