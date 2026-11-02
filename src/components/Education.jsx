const education = [
  {
    degree: "B.Tech in Computer Science and Technology",
    institution: "Sir C R Reddy College of Engineering (JNTUK)",
    score: "CGPA: 7.6",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    score: "CGPA: 8.0",
  },
  {
    degree: "Schooling",
    institution: "Sir C R Reddy Public School",
    score: "CGPA: 6.14",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Education
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Educational Journey
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-4 top-0 hidden h-full w-px bg-blue-100 sm:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className="relative rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:ml-10"
              >
                <div className="absolute -left-[42px] top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow sm:block" />

                <span className="text-sm font-semibold text-blue-600">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.degree}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.institution}
                </p>

                <p className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {item.score}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}