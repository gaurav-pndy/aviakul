// src/components/LeadershipTeam.jsx
import { motion } from "framer-motion";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Mr. Andy Kotwani",
      designation: "Chairman",
      org: "Aviakul Group of Companies",
      description:
        "Mr. Andy Kotwani embodies entrepreneurship, wellness, and a spirit of giving. Andy is a seasoned businessman and is co-owner of the famous Imperial Tailoring Co. He has suited up several Presidents, Prime Ministers, and elites. He hails from Mumbai and has successfully built up his massive business empire from scratch. He is considered to be an Ambitious, conservative and restrained individual. All his actions are carefully considered about and analyzed in detail. His vision and unwavering faith in the bright future of aviation is what drives Aviakul.",
    },
    {
      name: "Mr. Vaibhav Varun",
      designation: "Managing Director",
      org: "Aviakul Group of Companies",
      description:
        "Having spent most of his adult life in Moscow, Vaibhav hails from Darbhanga, Bihar. He has a bachelor's degree in Aeronautical Engineering from prestigious institute of its kind in entire Europe & Asia.  A writer at heart, Vulcan by mind, lack of deity by soul; So far, he has written 3 books and has many upcoming projects by the end of 2022 and the starting months of 2023. All seminars conducted by Vaibhav since the very starting have been free-of-cost. He is currently the Managing Director of Aviakul Group of Companies – An Aviation initiative that aims to revolutionize Commercial Aviation & Aerospace Ecosystem of Indian Aviation. He also is the co-founder of Centre for Scientific Outreach, Not-for-profit organization that aims to bring science to grassroot people through various outreach activities.",
    },
    {
      name: "Mr. Praveen Sankaran",
      designation: "General Manager",
      org: "Aviakul Group of Companies",
      description:
        "Mr. Praveen Sankaran is a dynamic aerospace professional currently serving as the General Manager at Aviakul Group of Companies, where he has played a pivotal role in steering the organization’s growth since its inception. With a robust academic foundation – holding a Master of Science in Aerospace Engineering from Moscow Aviation Institute and a bachelor’s in mechanical engineering, he brings a blend of technical depth and managerial acumen to the aviation industry. Through his commitment to professional excellence, he continues to contribute to India’s growing aviation ecosystem through strategic leadership, technical expertise, and a global perspective.",
    },
  ];

  return (
    <section className="py-16  px-4 md:px-6 lg:px-8 xl:px-24 ">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-4 text-gray-900">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders driving Aviakul's mission to transform
            India's aviation ecosystem.
          </p>
        </motion.div>

        <div className=" space-y-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="lg:flex gap-16"
            >
              {/* Placeholder for profile image */}
              <div className="lg:w-[35%] h-96 bg-gray-200  mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photo</span>
              </div>

              <div className="lg:w-[65%]">
                <h3 className="text-2xl mb-2 lg:text-3xl font-medium text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-lg lg:text-xl   mb-4 italic text-accent">
                  {leader.designation}, {leader.org}
                </p>

                <p className=" lg:text-lg font-[300] leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
