const githubUrl = "https://github.com/Jayavarshiniveduruvada";
const linkedinUrl =
  "https://www.linkedin.com/in/jayavarshini-veduruvada-aab1532a4";
const email = "mailto:jayavarshiniveduruvada@gmail.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#080d18] text-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Veduruvada{" "}
              <span className="text-blue-400">Jayavarshini</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Full Stack Developer passionate about building responsive,
              user-friendly and scalable web applications.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 7.9c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.93-2.35 4.79-4.58 5.04.36.32.68.95.68 1.91v2.84c0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span className="text-sm font-bold">in</span>
              </a>

              <a
                href={email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 6 8 6 8-6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Education", "#education"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="group text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="mr-2 text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Interested in working together or discussing an opportunity?
              Feel free to reach out.
            </p>

            <a
              href={email}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              jayavarshiniveduruvada@gmail.com
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} Veduruvada Jayavarshini. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-blue-400"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}