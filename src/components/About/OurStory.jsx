// src/components/OurStory.```
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-16 lg:pb-40 px-4 md:px-6 lg:px-8 xl:px-24 bg-white">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="justify-between"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-6 text-gray-900 l">
            Our Story
          </h2>

          <div className="prose prose-lg text-lg font-[300] leading-relaxed space-y-6">
            <p>
              Founded in 2020, Aviakul — derived from ‘Avia’ (Flight) and ‘Kul’
              (Home) — was born with a revolutionary vision: to create the
              <b>world’s first truly integrated aviation ecosystem.</b>{" "}
              Recognizing the fragmented nature of the aviation sector, our
              founders — a team of young aviation professionals and business
              leaders — set out to bring every dimension of aviation under one
              unified platform.
            </p>

            <p>
              What began with pilot training quickly evolved into an
              <b>eight-vertical structure</b> covering training, outreach,
              trade, media, legal services, infrastructure development, and
              indigenous innovation. Each vertical complements the other,
              ensuring that <b>our ecosystem functions as one</b> , where one’s
              output seamlessly becomes another’s input.
            </p>

            <p>
              {" "}
              From training tomorrow’s pilots to shaping aviation policy both at
              global platforms and grassroots level, from building modern
              infrastructure to advancing indigenous aerospace technologies,
              Aviakul is redefining how aviation is taught, practiced, and
              sustained in India and beyond.{" "}
              <b>More than a company — we are the "Home of Aviation."</b>
            </p>

            <p>
              {" "}
              We believe true transformation in aviation is possible only
              through three pillars:{" "}
              <b>People, Network, and Indigenous Development</b> . With this
              philosophy, Aviakul continues to connect communities, empower
              professionals, and create opportunities that strengthen India’s
              aviation ecosystem.
            </p>
          </div>
        </motion.div>

        <section className="relative w-full mt-10 mx-auto flex justify-end flex-col-reverse lg:flex-row gap-6 items-center overflow-x-hidden lg:overflow-x-visible">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:max-w-[60vw] w-full h-full max-h-[46rem]"
          >
            <img
              src="/about-1.avif"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#081e5f]/40 mix-blend-multiply"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:absolute top-1/3 left-0 lg:max-w-[36rem] w-full h-full max-h-[24rem]"
          >
            <img
              src="/about-2.avif"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#081e5f]/40 mix-blend-multiply"></div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
