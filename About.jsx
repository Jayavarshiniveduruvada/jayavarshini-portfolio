export default function About() {
  const technologies = [
    "Python",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Turning ideas into{" "}
            <span className="text-gradient">
              real applications
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Profile */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-4 rounded-3xl bg-blue-100 blur-2xl" />

              <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-7xl font-extrabold text-white shadow-2xl sm:h-80 sm:w-80">
                VJ
              </div>

            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Hi, I'm Jayavarshini 👋
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              I'm a passionate and motivated Full Stack Developer
              with hands-on experience in building responsive and
              user-friendly web applications.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              I have experience working with Python, JavaScript,
              React.js, Next.js, Node.js, Express.js, MongoDB,
              MySQL, HTML, and CSS.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              During my internship at HanviTech Solutions, I gained
              practical experience in MERN stack development and
              worked on developing and improving real-world web
              applications.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              I enjoy solving problems, learning new technologies,
              and turning ideas into functional and visually
              appealing applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}