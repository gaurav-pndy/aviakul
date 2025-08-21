// src/components/PartnershipsAssociations.jsx
import { motion } from "framer-motion";

export default function PartnershipsAssociations() {
  const partners = [
    { id: 1, src: "/partners/partner1.png", alt: "Partner 1" },
    { id: 2, src: "/partners/partner2.png", alt: "Partner 2" },
    { id: 3, src: "/partners/partner3.png", alt: "Partner 3" },
    { id: 4, src: "/partners/partner4.png", alt: "Partner 4" },
    { id: 5, src: "/partners/partner5.png", alt: "Partner 5" },
    { id: 6, src: "/partners/partner6.png", alt: "Partner 6" },
    { id: 7, src: "/partners/partner7.png", alt: "Partner 7" },
    { id: 8, src: "/partners/partner8.png", alt: "Partner 8" },
    { id: 9, src: "/partners/partner9.png", alt: "Partner 9" },
    { id: 10, src: "/partners/partner10.png", alt: "Partner 10" },
    { id: 11, src: "/partners/partner11.png", alt: "Partner 11" },
    { id: 12, src: "/partners/partner12.png", alt: "Partner 12" },
    { id: 13, src: "/partners/partner13.png", alt: "Partner 13" },
    { id: 14, src: "/partners/partner14.png", alt: "Partner 14" },
    { id: 15, src: "/partners/partner15.png", alt: "Partner 15" },
    { id: 16, src: "/partners/partner16.png", alt: "Partner 16" },
  ];

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
            Partnerships & Associations
          </h2>
          <p className="text-lg text-gray-600">
            Strengthening aviation through lasting networks and meaningful
            partnerships
          </p>
        </motion.div>

        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group  flex items-center justify-center min-h-[80px] md:min-h-[100px]"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain "
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback for missing images */}
                <div className="hidden items-center justify-center text-gray-400 text-xs">
                  {partner.alt}
                </div>
              </motion.div>
            ))}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="group  flex items-center justify-center min-h-[80px] md:min-h-[100px] col-span-4 w-full"
            >
              <img
                src="/partners/partner17.png"
                alt="Partner 17"
                className=" w-full object-contain "
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
