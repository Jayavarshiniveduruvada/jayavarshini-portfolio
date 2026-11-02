export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have an opportunity or want to connect? Feel free to
            reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact details */}
          <div className="rounded-3xl bg-gray-950 p-8 text-white sm:p-10">

            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm open to discussing software development
              opportunities, projects, and collaborations.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:jayavarshiniveduruvada@gmail.com"
                  className="mt-1 block text-sm font-medium hover:text-blue-400"
                >
                  jayavarshiniveduruvada@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:7416479529"
                  className="mt-1 block text-sm font-medium hover:text-blue-400"
                >
                  7416479529
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium">
                  Eluru
                </p>
              </div>

            </div>

            <div className="mt-10 flex gap-3">

              <a
                href="https://github.com/Jayavarshiniveduruvada"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-700 px-5 py-2 text-sm hover:border-blue-400 hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jayavarshini-veduruvada-aab1532a4"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-700 px-5 py-2 text-sm hover:border-blue-400 hover:text-blue-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;

              const subject = `Portfolio Contact from ${name}`;

              const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

              window.location.href =
                `mailto:jayavarshiniveduruvada@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10"
          >

            <div>
              <label className="text-sm font-semibold text-gray-800">
                Name
              </label>

              <input
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-gray-800">
                Email
              </label>

              <input
                name="email"
                required
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-gray-800">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your opportunity..."
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Send Message →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}