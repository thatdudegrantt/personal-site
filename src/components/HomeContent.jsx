// src/components/HomeContent.jsx
// React island — loaded client-side for framer-motion animations.
// In Astro this is used with client:load in index.astro.

import { motion } from "framer-motion";

const content = [
  {
    text: "My name is Grant Polazzo & I'm a senior at Georgia Tech majoring in Computer Science with threads in Systems Architecture and Media.",
    image: "/images/careerFair.png",
    portrait: true,
  },
  {
    text: "I am extremely passionate about building projects, solving problems, team collaboration, designing SaaS products for clients, and continuing my evolution as a software engineer!",
    image: "/images/gatechSports.png",
    portrait: true,
  },
  {
    text: "My coursework has included advanced topics like Data Structures, Algorithms, Object-Oriented Programming, and Agile Project Methodologies.",
    image: "/images/onCampus.png",
    portrait: true,
  },
  {
    text: "Beyond academics, I love working on personal coding projects that challenge me to learn new technologies and approaches. The process of taking an idea from concept to implementation is incredibly rewarding to me — one project I'm super excited about is a computer vision model designed to correctly identify and label plankton species!",
    image: "/images/walkingPets.png",
    portrait: true,
  },
  {
    text: "When I'm not coding, you can find me working out, cooking new recipes (like this veggie pho I made), learning to play guitar, or spending quality time with friends and family. I also enjoy volunteering, canvassing for political candidates, and participating in community outreach whenever possible!",
    image: "/images/homemadePho.png",
    portrait: true,
  },
  {
    text: "I'm excited about opportunities where I can contribute my technical skills while continuing to grow as an engineer. I thrive in collaborative environments where teams work together to create something meaningful. Thank you for visiting my website!",
    image: "/images/vacation.png",
    portrait: true,
  },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-20 md:space-y-40 text-base-content">
          {content.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col gap-8 items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Image column */}
              <motion.div
                className={`relative ${
                  item.portrait ? "md:w-5/12" : "md:w-7/12"
                } w-full`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src={item.image}
                  alt=""
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`w-full rounded-xl shadow-2xl ${
                    item.portrait
                      ? "aspect-[3/4] object-cover object-top"
                      : "aspect-video object-contain"
                  }`}
                />
              </motion.div>

              {/* Text column */}
              <div
                className={`${
                  item.portrait ? "md:w-7/12" : "md:w-5/12"
                } w-full p-2 md:p-8`}
              >
                <motion.p
                  className="text-lg md:text-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 0.5 } }}
          viewport={{ margin: "-25%" }}
          className="w-24 h-0.5 bg-primary mx-auto my-20"
        />

        {/* CTA section */}
        <div>
          <motion.div
            className="w-full text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl md:text-3xl font-light text-base-content mb-4 px-4">
              Thank you for visiting my portfolio. Let's connect and discuss how
              we might work together.
            </h3>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="/projects"
              className="btn btn-primary px-6 py-3 text-base md:text-lg text-primary-content"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume"
              className="btn btn-outline px-6 py-3 text-base md:text-lg border-2 text-base-content hover:text-base-content"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--b2))" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              See Resume
            </motion.a>

            <motion.a
              href="/contact"
              className="btn btn-accent px-6 py-3 text-base md:text-lg text-accent-content"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
