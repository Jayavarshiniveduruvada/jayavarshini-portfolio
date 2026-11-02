import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080d18] px-5 pt-24 text-white sm:px-8 lg:px-10"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[25%] top-[25%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_30px_8px_rgba(96,165,250,0.25)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="animate-slide-up">

          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm font-medium text-green-400 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            Available for opportunities
          </div>

          {/* Greeting */}
          <p className="mb-3 text-base font-medium text-gray-400 sm:text-lg">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Veduruvada{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Jayavarshini
            </span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              Full Stack Developer
            </span>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-300">
              MERN
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive, user-friendly web applications with modern
            technologies. I enjoy solving problems, learning new technologies,
            and transforming ideas into meaningful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              View My Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/5 hover:text-blue-300"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-9 flex flex-wrap items-center gap-5">

            <a
              href="https://github.com/Jayavarshiniveduruvada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-white"
            >
              GitHub ↗
            </a>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <a
              href="https://www.linkedin.com/in/jayavarshini-veduruvada-aab1532a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              LinkedIn ↗
            </a>

            <span className="h-1 w-1 rounded-full bg-gray-700" />

            <a
              href="mailto:jayavarshiniveduruvada@gmail.com"
              className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              Email ↗
            </a>

          </div>
        </div>

        {/* =========================
            RIGHT PROFILE
        ========================== */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Glow */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[90px]" />

          <div className="relative">

            {/* Outer rotating ring */}
            <div className="absolute -inset-5 rounded-[2rem] border border-blue-400/10" />

            {/* Profile Card */}
            <div className="relative w-[290px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl sm:w-[340px]">

              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src={profileImage}
                  alt="Veduruvada Jayavarshini"
                  className="h-[380px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[430px]"
                />

                {/* Image gradient */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080d18] via-[#080d18]/40 to-transparent" />

                {/* Open to work */}
                <div className="absolute bottom-5 left-5 rounded-full border border-green-400/20 bg-[#080d18]/80 px-4 py-2 text-xs font-semibold text-green-400 backdrop-blur-md">
                  ● Open to Work
                </div>
              </div>

              {/* Profile info */}
              <div className="px-3 pb-3 pt-5">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-lg font-bold text-white">
                      Jayavarshini
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>

                  <div className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                    MERN
                  </div>

                </div>

              </div>
            </div>

            {/* Floating technology card */}
            <div className="absolute -bottom-7 -left-10 hidden rounded-2xl border border-white/10 bg-[#101827]/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block">

              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Tech Stack
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-200">
                React • Node • MongoDB
              </p>

            </div>

            {/* Floating experience card */}
            <div className="absolute -right-7 top-10 hidden rounded-2xl border border-white/10 bg-[#101827]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">

              <p className="text-xs text-gray-500">
                Passion
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Building 🚀
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}