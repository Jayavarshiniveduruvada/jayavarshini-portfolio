import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "FULL STACK • MERN",
    title: "Meeting Room Booking System",
    description:
      "A full-stack meeting room reservation platform that simplifies room discovery, availability checking, and booking management.",
    features: [
      "JWT-based authentication",
      "Admin and user role management",
      "Room availability management",
      "Date and time slot booking",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Jayavarshiniveduruvada",
    accent: "blue",
  },

  {
    number: "02",
    category: "FULL STACK • WEB APPLICATION",
    title: "Task Management System",
    description:
      "A productivity-focused task management application designed to help users organize tasks, track progress, and manage their workflow efficiently.",
    features: [
      "Task creation and management",
      "Task status tracking",
      "CRUD operations",
      "Responsive interface",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Jayavarshiniveduruvada",
    accent: "purple",
  },

  {
    number: "03",
    category: "MACHINE LEARNING • PYTHON",
    title: "Click-Through Rate Prediction",
    description:
      "A machine learning classification project that predicts whether a user is likely to click an advertisement using historical click data.",
    features: [
      "Data preprocessing",
      "Categorical feature encoding",
      "Feature scaling",
      "Multiple ML model comparison",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Flask",
    ],
    github: "https://github.com/Jayavarshiniveduruvada",
    accent: "green",
  },
];

const accentStyles = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    number: "text-blue-500",
    icon: "bg-blue-600",
    button: "hover:border-blue-600 hover:text-blue-600",
    glow: "bg-blue-500",
  },

  purple: {
    badge: "bg-purple-50 text-purple-700 border-purple-100",
    number: "text-purple-500",
    icon: "bg-purple-600",
    button: "hover:border-purple-600 hover:text-purple-600",
    glow: "bg-purple-500",
  },

  green: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    number: "text-emerald-500",
    icon: "bg-emerald-600",
    button: "hover:border-emerald-600 hover:text-emerald-600",
    glow: "bg-emerald-500",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f8fafc] px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background animations */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700"
          >
            My Work
          </motion.span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
            Projects that turn{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ideas into reality
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            A selection of projects demonstrating my experience
            across full-stack development, backend systems,
            and machine learning.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-7 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const style = accentStyles[project.accent];

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl"
              >
                {/* Project Preview */}
                <div className="relative h-52 overflow-hidden bg-gray-950">

                  {/* Animated glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full ${style.glow} blur-3xl`}
                  />

                  <div className="absolute inset-0 p-6">

                    {/* Browser dots */}
                    <div className="flex items-center gap-2">
                      <motion.span
                        whileHover={{ scale: 1.4 }}
                        className="h-2.5 w-2.5 rounded-full bg-red-400"
                      />

                      <motion.span
                        whileHover={{ scale: 1.4 }}
                        className="h-2.5 w-2.5 rounded-full bg-yellow-400"
                      />

                      <motion.span
                        whileHover={{ scale: 1.4 }}
                        className="h-2.5 w-2.5 rounded-full bg-green-400"
                      />
                    </div>

                    <div className="mt-8 flex items-end justify-between">

                      <div>
                        <p className="font-mono text-xs text-gray-500">
                          project/
                        </p>

                        <p className="mt-1 font-mono text-lg font-bold text-white">
                          {project.title
                            .toLowerCase()
                            .replaceAll(" ", "-")}
                        </p>
                      </div>

                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className={`font-mono text-5xl font-black ${style.number}`}
                      >
                        {project.number}
                      </motion.span>

                    </div>

                    {/* Code animation */}
                    <div className="mt-6 space-y-2 opacity-50">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1.5 rounded bg-gray-600"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="h-1.5 rounded bg-gray-700"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-1.5 rounded bg-gray-700"
                      />

                    </div>

                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">

                  <span
                    className={`w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-wider ${style.badge}`}
                  >
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-extrabold leading-tight text-gray-950 transition-colors duration-300 group-hover:text-blue-600">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6">

                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Highlights
                    </p>

                    <ul className="mt-3 space-y-2">

                      {project.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.15 + index * 0.08,
                          }}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.icon}`}
                          />

                          <span>{feature}</span>
                        </motion.li>
                      ))}

                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.technologies.map((technology, index) => (
                      <motion.span
                        key={technology}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + index * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        className="cursor-default rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-900 hover:text-white"
                      >
                        {technology}
                      </motion.span>
                    ))}

                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-8">

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`inline-flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-800 transition-colors duration-300 ${style.button}`}
                    >
                      View Project

                      <motion.span
                        className="ml-2"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </motion.a>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">
            More projects and experiments coming soon.
          </p>

          <motion.a
            href="https://github.com/Jayavarshiniveduruvada"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            className="mt-4 inline-flex items-center font-semibold text-gray-900 transition-colors hover:text-blue-600"
          >
            Explore my GitHub
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="ml-2"
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}