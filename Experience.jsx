export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Experience
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Professional Experience
          </h2>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-blue-600">
                MERN Stack Development Intern
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                HanviTech Solutions
              </h3>
            </div>

            <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              1.5 Months
            </span>

          </div>

          <div className="mt-7 border-t border-gray-100 pt-7">
            <p className="leading-8 text-gray-600">
              Gained hands-on experience in MERN stack development
              and contributed to developing and improving real-world
              web applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}