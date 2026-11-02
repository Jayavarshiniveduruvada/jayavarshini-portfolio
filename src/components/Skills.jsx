const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Concepts",
    skills: ["OOPs", "Basic AI & ML"],
  },
  {
    title: "Tools",
    skills: ["Git"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Skills
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}