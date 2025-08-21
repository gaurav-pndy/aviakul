// src/components/JourneyTimeline.jsx
import { motion } from "framer-motion";

export default function JourneyTimeline() {
  const timelineData = [
    {
      year: "2020",
      title: "Foundation of Aviakul",
      description:
        "Born with the vision of building the world's first integrated aviation ecosystem, uniting training, outreach, media, legal, infrastructure, technology, and trade.",
    },
    {
      year: "2021",
      title: "Laying the Groundwork",
      description:
        "•	Establishment of Aviakul Aviation Academy.  <br/>•	Expansion into 8 core verticals begins. <br/>•	Launched grassroots aviation education & career guidance programs in schools and colleges. <br/>•	Conducted first drone workshops, started the journey of inspiring students across India. <br/>",
    },
    {
      year: "2022",
      title: "Stepping onto the Global Stage",
      description:
        "•	Hosted <b>EAMRO 2022</b>, Aviakul’s first flagship international conference.<br/>•	Organized first <b>GSAC 2022</b>, amplifying global aviation sustainability dialogue.<br/>",
    },
    {
      year: "2023",
      title: "Media & Global Engagement",
      description:
        "•	Established <b>TBBT Media Solutions LLP</b>, Aviakul’s media & events division.<br/>•	Successfully hosted <b>EAMRO 2023</b> and <b>India-Russia Space Dialogue 2023</b>, strengthening global ties.<br/>•	Scaled scholarship programs and career guidance outreach.<br/>",
    },
    {
      year: "2024",
      title: "Strengthening the Ecosystem",
      description:
        "•	Founded <b>B.L. Das & Co.</b>, Aviakul’s aviation-focused legal advisory firm.<br/> •	Expanded indigenous technology development with <b>Aviakul Systems</b> and <b>Pasovit Technologies.<br/> •	Hosted <b>EAMRO 2024</b> and <b>GSAC 2024</b>, reaffirming Aviakul’s global convening role.<br/> ",
    },
    {
      year: "2025",
      title: "Diversifying Impact",
      description:
        "•	Hosted <b>EAMRO 2025, International Conference on Aviation Law 2025, and India’s First Pilot Career Expo 2025.</b><br/>•	Expanded grassroots outreach to <b>20+ schools</b>, inspiring the next generation of aviation professionals.<br/>",
    },
    {
      year: "Beyond 2025",
      title: "The Road Ahead",
      description:
        "•	Guided by our pillars of <b>People, Network, and Indigenous Development</b>, Aviakul continues to strengthen aviation through education, technology, policy, and global collaboration.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 xl:px-24 bg-white">
      <div className=" mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-center font-medium mb-12 text-gray-900 "
        >
          Our Journey
        </motion.h2>

        <div className="relative overflow-x-hidden">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 overflow-x-hidden top-0 bottom-0 w-0.5 bg-blue-300"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex overflow-x-hidden items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className=" ">
                  <div className="text-xl font-medium text-accent mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="font-[300] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 bg-gradient-to-r from-accent/5 to-primary/5  p-8"
        >
          <blockquote className="text-xl md:text-3xl  text-primary mb-8 max-w-4xl mx-auto leading-relaxed">
            “From one vision in 2020 to a growing family of companies,
            communities, and conferences – Aviakul is building the future of
            aviation.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
