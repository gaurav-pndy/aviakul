// src/components/BusinessSidebar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function BusinessSidebar({
  businesses,
  selectedBusiness,
  onBusinessSelect,
  isOpen,
  onToggle,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="lg:hidden mb-6 relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full bg-white border border-gray-200  p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#1c3687]/10 rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-sm">
                {selectedBusiness?.icon && (
                  <selectedBusiness.icon className="text-xl" />
                )}
              </span>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 text-sm">
                {selectedBusiness?.name || "Select a Business"}
              </p>
              {selectedBusiness && (
                <p className="text-xs text-gray-500">
                  {selectedBusiness.category}
                </p>
              )}
            </div>
          </div>
          <motion.div
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown className="text-gray-400" />
          </motion.div>
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200  shadow-xl z-50 max-h-80 overflow-y-auto"
            >
              <div className="py-2">
                {businesses.map((business, index) => (
                  <motion.button
                    key={business.id}
                    onClick={() => {
                      onBusinessSelect(business);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left p-3 transition-all duration-200 flex items-center space-x-3 ${
                      selectedBusiness?.id === business.id
                        ? "bg-accent text-white"
                        : "hover:bg-gray-50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1, delay: index * 0.02 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${
                        selectedBusiness?.id === business.id
                          ? "bg-white/20"
                          : "bg-accent/10"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          selectedBusiness?.id === business.id
                            ? "text-white"
                            : "text-accent"
                        }`}
                      >
                        {business.icon && <business.icon />}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-medium text-sm leading-tight mb-1 ${
                          selectedBusiness?.id === business.id
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {business.name}
                      </h3>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop to close dropdown */}
        {dropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setDropdownOpen(false)}
          />
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:sticky top-24 w-80  overflow-hidden">
        <div className="">
          {/* Business List */}
          <nav className="space-y-1">
            {businesses.map((business, index) => (
              <motion.button
                key={business.id}
                onClick={() => onBusinessSelect(business)}
                className={`w-full cursor-pointer text-left p-3  transition-all duration-300 flex  space-x-2 ${
                  selectedBusiness?.id === business.id
                    ? "bg-accent text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50  hover:translate-x-1 transition-all duration-300"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex-1 min-w-0">
                  <h3
                    className={` text-sm leading-tight mb-1 ${
                      selectedBusiness?.id === business.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {business.name}
                  </h3>
                </div>
              </motion.button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
