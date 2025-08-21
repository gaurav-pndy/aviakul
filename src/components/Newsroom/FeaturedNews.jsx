// src/components/FeaturedNews.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function FeaturedNews() {
  const featuredNews = [
    {
      id: 1,
      category: "Conference",
      date: "March 15, 2025",
      title: "EAMRO 2025: Global Aviation Leaders Unite in New Delhi",
      teaser:
        "Industry giants commit to sustainable aviation initiatives with groundbreaking partnerships.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/eamro-2025",
    },
    {
      id: 2,
      category: "Innovation",
      date: "March 12, 2025",
      title: "GSAC 2025 Announces Revolutionary Space-Aviation Collaboration",
      teaser:
        "Pioneering the future of aerospace technology with international partnerships.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/gsac-2025",
    },
    {
      id: 3,
      category: "Career",
      date: "March 10, 2025",
      title: "Pilot Career Expo 2025: Record-Breaking Attendance",
      teaser:
        "Over 10,000 aspiring pilots connect with industry leaders at premier career event.",
      image:
        "https://images.unsplash.com/photo-1493673155827-a7617e74a0ca?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/news/pilot-career-expo-2025",
    },
    {
      id: 4,
      category: "Partnership",
      date: "March 8, 2025",
      title:
        "India-Russia Space Dialogue 2025: Bilateral Cooperation Strengthens",
      teaser:
        "Strategic partnerships in space technology mark new era of collaboration.",
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/india-russia-space-dialogue",
    },
    {
      id: 5,
      category: "Technology",
      date: "March 5, 2025",
      title:
        "Indigenous Aviation Tech: Aviakul Systems Unveils Next-Gen Platform",
      teaser:
        "Breakthrough in self-reliant aerospace technology supports Atmanirbhar Bharat vision.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/news/indigenous-aviation-tech",
    },
  ];

  //   const getCategoryColor = (category) => {
  //     const colors = {
  //       Conference: "bg-blue-600",
  //       Innovation: "bg-green-600",
  //       Career: "bg-purple-600",
  //       Partnership: "bg-orange-600",
  //       Technology: "bg-red-600",
  //     };
  //     return colors[category] || "bg-gray-600";
  //   };

  return (
    <section className="py-16 lg:pb-40 px-4 md:px-6 lg:px-8 xl:px-24 bg-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-medium mb-6 text-gray-900 "
          >
            Featured News
          </motion.h2>

          {/* Custom Navigation Buttons */}
          <div className="hidden md:flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-prev-custom w-12 h-12 hover:scale-125 transition-all duration-200 flex items-center justify-center cursor-pointer"
              aria-label="Previous news"
            >
              <FaArrowLeft className="text-gray-600 hover:text-gray-900 transition-all duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-next-custom w-12 h-12 hover:scale-125 transition-all duration-200 flex items-center justify-center cursor-pointer "
              aria-label="Next news"
            >
              <FaArrowRight className="text-gray-600 hover:text-gray-900 transition-all duration-200" />
            </motion.button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          loop={true}
          className="featured-news-swiper"
        >
          {featuredNews.map((news) => (
            <SwiperSlide key={news.id}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" overflow-hidden  h-full group"
              >
                {/* Image with Category Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081e5f]/40 to-transparent"></div>

                  <span
                    className={`absolute top-3 left-3 bg-[#1c3687]/80 text-white px-2 py-1 text-xs font-medium rounded uppercase tracking-wide`}
                  >
                    {news.category}
                  </span>
                </div>

                {/* Content */}
                <div className="py-3">
                  <time className="text-sm text-gray-600 mb-2 block">
                    {news.date}
                  </time>

                  <h3 className="text-lg font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                    {news.title}
                  </h3>

                  <p className="font-[300] text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.teaser}
                  </p>

                  <a
                    href={news.link}
                    className="inline-flex items-center text-accent font-medium text-sm group-hover:text-primary transition-colors duration-300"
                  >
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
      </div>
    </section>
  );
}
