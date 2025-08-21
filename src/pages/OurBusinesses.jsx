// src/pages/OurBusinesses.jsx
import { useState } from "react";
import { motion } from "framer-motion";

import BusinessDetail from "../components/Businesses/BusinessDetail";
import BusinessSidebar from "../components/Businesses/BusinessSidebar";
import { businesses } from "../data/businesses";

export default function OurBusinesses() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set first business as default
  useState(() => {
    setSelectedBusiness(businesses[0]);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-50 pb-5 pt-28  px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6 text-gray-600 text-sm tracking-wider uppercase">
              <div className="w-12 h-px bg-gray-400"></div>
              <span>Our Businesses</span>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Businesses
            </h1> */}
            <p className="md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aviakul Group operates eight specialized verticals that work
              together to create a comprehensive aviation ecosystem. Each
              division brings unique expertise and services to support every
              aspect of the aviation industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 ">
        <div className=" mx-auto px-4 md:px-6 lg:pl-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <BusinessSidebar
                businesses={businesses}
                selectedBusiness={selectedBusiness}
                onBusinessSelect={setSelectedBusiness}
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
              />
            </div>

            {/* Content */}
            <div className="flex-1 lg:pl-8">
              <BusinessDetail business={selectedBusiness} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
