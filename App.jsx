import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;
const RESUME = `${BASE}resume.pdf`;
const PHOTO = `${BASE}profile.png`;
const EMAIL = "jayavarshiniveduruvada@gmail.com";
const GITHUB = "https://github.com/Jayavarshiniveduruvada";
const LINKEDIN = "https://www.linkedin.com/in/jayavarshini-veduruvada-aab1532a4";

const nav = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "C", "SQL"] },
  { group: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend & Databases", items: ["Node.js", "Express.js", "MongoDB", "MySQL"] },
  { group: "Tools & Concepts", items: ["Git & GitHub", "VS Code", "Power BI", "OOP basics", "AI/ML basics"] },
];

const projects = [
  {
    title: "Meeting Room Booking System",
    text: "Full-stack booking app with JWT authentication and admin/user roles. Shows live room availability by date, time and participants, with quick time-slot booking and an admin panel for rooms, users and bookings.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Task Management System",
    text: "Built during my HanviTech internship. OTP authentication, JWT authorization, role-based access, task and user management, and a responsive React frontend with reusable components.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Click Through Rate Prediction",
    text: "A machine learning model that predicts user click behaviour and analyses interaction data to support better decisions on digital platforms.",
    tech: ["Python", "Machine Learning"],
  },
  {
    title: "Career Bridge IT Services Website",
    text: "A 2-month project: a clear, easy-to-navigate website that helps visitors understand the institute's services and offerings.",
    tech: ["HTML", "CSS"],
  },
];

const education = [
  { years: "2022 – 2026", title: "B.Tech, Computer Science & Technology", place: "Sir C R Reddy College of Engineering (JNTUK)", note: "CGPA 7.6" },
  { years: "2020 – 2022", title: "Intermediate (MPC)", place: "Sri Chaitanya Junior College, Eluru", note: "CGPA 8.0" },
  { years: "2019 – 2020", title: "CBSE", place: "Sir C R Reddy Public School, Eluru", note: "CGPA 6.14" },
];

const certs = [
  ["Python Full Stack Development", "Coaching programme"],
  ["MERN Stack Developer", "HanviTech"],
  ["Programming for Everybody (Python)", "University of Michigan, Coursera"],
  ["Web Development", "Career Bridge IT Services"],
  ["Artificial Intelligence & Machine Learning", "Innovate Intern"],
  ["Power BI Workshop", "DataValley"],
];

const Arrow = () => (
  <svg className="btn-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Download = () => (
  <svg className="btn-ico-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);

/* fade / slide in when scrolled into view. from = "up" | "left" | "right" | "zoom" | "grow" */
function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const dir = from === "up" ? "" : from;
  return (
    <div ref={ref} style={{ "--d": `${delay}ms` }} className={`reveal ${dir} ${className}`}>
      {children}
    </div>
  );
}

/* number that counts up when visible */
function CountUp({ to, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / 1200, 1);
          setVal(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

/* card that tilts toward the mouse */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--rx", `${(y / r.height - 0.5) * -7}deg`);
    el.style.setProperty("--ry", `${(x / r.width - 0.5) * 7}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };
  const leave = () => {
    const el = ref.current;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <article ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>
      {children}
    </article>
  );
}

function Heading({ eyebrow, title }) {
  return (
    <Reveal className="mb-10 sm:mb-12">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] t-orange">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <span className="bar" />
    </Reveal>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
      setScrolled(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="font-sans">
      <div className="progress"><div style={{ transform: `scaleX(${progress})` }} /></div>

      {/* NAVBAR */}
      <header className="nav-bar fixed inset-x-0 top-[3px] z-50">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            JV<span className="t-orange">.</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className={`nav-link text-sm font-semibold ${active === n.toLowerCase() ? "active" : ""}`}>
                {n}
              </a>
            ))}
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2">
              Resume
            </a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="icon-btn flex h-10 w-10 items-center justify-center rounded-lg lg:hidden">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="menu-drop px-5 pb-4 lg:hidden" style={{ borderTop: "1px solid var(--line)" }}>
            <div className="flex flex-col gap-1 pt-3">
              {nav.map((n) => (
                <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-semibold t-muted transition hover:bg-white/5 hover:text-white">
                  {n}
                </a>
              ))}
              <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Resume</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-bg relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:pb-24">
          <div className="grid-lines pointer-events-none absolute inset-0" />
          <div className="blob blob-a pointer-events-none" />
          <div className="blob blob-b pointer-events-none" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="rise text-sm font-bold uppercase tracking-[0.2em] t-orange">Full Stack Developer</p>
              <h1 className="rise mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={{ "--d": "120ms" }}>
                Veduruvada
                <br />
                <span className="grad-text">Jayavarshini</span>
              </h1>
              <h2 className="rise mt-4 text-lg font-bold t-orchid sm:text-xl" style={{ "--d": "240ms" }}>
                MERN Stack · Python Full Stack · React · Node.js
              </h2>
              <p className="rise mt-5 max-w-xl text-base leading-8 t-muted sm:text-lg" style={{ "--d": "360ms" }}>
                I build responsive, user-friendly web applications. I enjoy solving problems and turning ideas into functional, clean and reliable software.
              </p>

              <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--d": "480ms" }}>
                <a href="#projects" className="btn btn-primary">View Projects <Arrow /></a>
                <a href={RESUME} download="Jayavarshini_Veduruvada_Resume.pdf" className="btn btn-ghost">
                  Download Resume <Download />
                </a>
              </div>

              <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--d": "600ms" }}>
                {[["GitHub", GITHUB], ["LinkedIn", LINKEDIN], ["Email", `mailto:${EMAIL}`]].map(([label, href]) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="chip px-4 py-2 text-sm font-bold">
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* photo + code card */}
            <div className="rise mx-auto w-full max-w-[320px] sm:max-w-[340px]" style={{ "--d": "300ms" }}>
              <div className="photo-ring">
                <img
                  src={PHOTO}
                  alt="Veduruvada Jayavarshini"
                  className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[50%_22%]"
                />
              </div>
              <div className="code-card floaty relative -mt-14 ml-4 rounded-xl p-4 font-mono text-[12px] leading-6 sm:-ml-10 sm:text-[13px]" style={{ color: "var(--muted)" }}>
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--orange)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--orchid)" }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#6b2d86" }} />
                </div>
                <p><span className="tok-kw">const</span> developer = {"{"}</p>
                <p className="pl-4">name: <span className="tok-str">{'"Jayavarshini"'}</span>,</p>
                <p className="pl-4">role: <span className="tok-str">{'"Full Stack Developer"'}</span>,</p>
                <p className="pl-4">stack: [<span className="tok-str">{'"MERN", "Python"'}</span>],</p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="About me" title="Curious, motivated and always learning" />
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <Reveal from="left" className="space-y-5 text-base leading-8 t-muted sm:text-lg">
                <p>I'm a Computer Science graduate who enjoys building responsive web apps and learning new technologies. I gained hands-on MERN stack experience during my internship at HanviTech Solutions, working on real-world applications.</p>
                <p>I'm also training in Python Full Stack development, and I'm looking for a developer role where I can contribute to a team, keep growing and build a career in software development.</p>
                <p className="text-sm font-semibold t-orchid">Based in Eluru · Hobbies: painting, travelling</p>
              </Reveal>
              <div className="grid grid-cols-3 gap-3">
                {[[1.5, 1, "months internship"], [projects.length, 0, "projects built"], [certs.length, 0, "certifications"]].map(([n, d, l], i) => (
                  <Reveal key={l} from="zoom" delay={i * 120}>
                    <div className="card h-full rounded-xl p-4 text-center hover:-translate-y-1.5">
                      <p className="c-text text-3xl font-extrabold"><CountUp to={n} decimals={d} /></p>
                      <p className="c-muted mt-1 text-xs font-bold leading-snug">{l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="sec-alt px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="Skills" title="Tools I work with" />
            <div className="grid gap-5 sm:grid-cols-2">
              {skills.map((s, i) => (
                <Reveal key={s.group} from={i % 2 === 0 ? "left" : "right"} delay={i * 90} className="h-full">
                  <div className="card h-full rounded-2xl p-6 hover:-translate-y-1.5">
                    <h3 className="c-accent text-sm font-extrabold uppercase tracking-wider">{s.group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="chip-card cursor-default px-3 py-1.5 text-sm font-bold">{it}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="Projects" title="Things I've built" />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 140} className="h-full">
                  <TiltCard className="card group flex h-full flex-col overflow-hidden rounded-2xl p-7">
                    <div className="flex items-start justify-between">
                      <span className="c-accent text-sm font-extrabold">0{i + 1}</span>
                      <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="c-text text-sm font-bold underline-offset-4 hover:underline">
                        GitHub ↗
                      </a>
                    </div>
                    <h3 className="c-text mt-3 text-xl font-extrabold">{p.title}</h3>
                    <p className="c-muted mt-3 flex-1 font-medium leading-7">{p.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="chip-card px-3 py-1 text-xs font-bold">{t}</span>
                      ))}
                    </div>
                    <span className="card-bar" />
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="sec-alt px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="Experience" title="Where I've worked" />
            <Reveal from="zoom">
              <div className="card rounded-2xl p-7 hover:-translate-y-1 sm:p-10" style={{ borderLeft: "6px solid var(--ink)" }}>
                <p className="c-accent text-xs font-extrabold uppercase tracking-widest">Internship · 1.5 months</p>
                <h3 className="c-text mt-2 text-2xl font-extrabold">MERN Stack Development Intern</h3>
                <p className="c-muted mt-1 font-bold">HanviTech Solutions</p>
                <p className="c-muted mt-5 max-w-3xl font-medium leading-8">
                  Gained hands-on experience in MERN stack development and contributed to developing and improving real-world web applications.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["MongoDB", "Express.js", "React.js", "Node.js"].map((t) => (
                    <span key={t} className="chip-card px-3 py-1.5 text-sm font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="Education" title="My academic journey" />

            <div className="relative space-y-6 sm:pl-10">
              <Reveal from="grow" className="timeline-line absolute left-[7px] top-0 hidden h-full w-[2px] sm:block" />
              {education.map((e, i) => (
                <Reveal key={e.title} from="left" delay={i * 140}>
                  <div className="card relative rounded-2xl p-6 hover:translate-x-1 sm:p-7">
                    <span className="timeline-dot hidden sm:block" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="c-accent text-sm font-extrabold">{e.years}</p>
                      <span className="chip-card w-fit px-3 py-1 text-xs font-bold">{e.note}</span>
                    </div>
                    <h3 className="c-text mt-2 text-xl font-extrabold">{e.title}</h3>
                    <p className="c-muted mt-1 font-semibold">{e.place}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h3 className="text-2xl font-extrabold">Certifications</h3>
              <span className="bar" />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certs.map(([name, by], i) => (
                <Reveal key={name} from="zoom" delay={(i % 3) * 110} className="h-full">
                  <div className="card h-full rounded-2xl p-6 hover:-translate-y-1.5">
                    <span className="cert-icon" aria-hidden="true">★</span>
                    <h4 className="c-text mt-3 text-base font-extrabold leading-snug">{name}</h4>
                    <p className="c-muted mt-1 text-sm font-semibold">{by}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sec-alt px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow="Contact" title="Let's work together" />
            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal from="left" className="h-full">
                <div className="card h-full rounded-3xl p-8 hover:-translate-y-1 sm:p-10">
                  <h3 className="c-text text-2xl font-extrabold">Get in touch</h3>
                  <p className="c-muted mt-3 font-medium leading-7">
                    I'm open to software development opportunities, projects and collaborations.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="c-accent text-xs font-extrabold uppercase tracking-widest">Email</p>
                      <a href={`mailto:${EMAIL}`} className="c-text link-u mt-1 block break-all font-bold">{EMAIL}</a>
                    </div>
                    <div>
                      <p className="c-accent text-xs font-extrabold uppercase tracking-widest">Phone</p>
                      <a href="tel:7416479529" className="c-text link-u mt-1 block font-bold">7416479529</a>
                    </div>
                    <div>
                      <p className="c-accent text-xs font-extrabold uppercase tracking-widest">Location</p>
                      <p className="c-text mt-1 font-bold">Eluru</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="chip-card px-4 py-2 text-sm font-bold">GitHub ↗</a>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="chip-card px-4 py-2 text-sm font-bold">LinkedIn ↗</a>
                  </div>
                </div>
              </Reveal>

              <Reveal from="right" className="h-full">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = e.currentTarget;
                    const subject = `Portfolio Contact from ${f.elements.name.value}`;
                    const body = `Name: ${f.elements.name.value}\nEmail: ${f.elements.email.value}\n\nMessage:\n${f.elements.message.value}`;
                    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                  className="code-card h-full rounded-3xl p-8 sm:p-10"
                >
                  <label className="text-sm font-bold t-orchid" htmlFor="name">Name</label>
                  <input id="name" name="name" required type="text" placeholder="Your name" className="field mt-2 w-full rounded-xl px-4 py-3" />

                  <label className="mt-5 block text-sm font-bold t-orchid" htmlFor="email">Email</label>
                  <input id="email" name="email" required type="email" placeholder="your@email.com" className="field mt-2 w-full rounded-xl px-4 py-3" />

                  <label className="mt-5 block text-sm font-bold t-orchid" htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows="5" placeholder="Write your message..." className="field mt-2 w-full resize-none rounded-xl px-4 py-3" />

                  <button type="submit" className="btn btn-primary mt-6 w-full">Send Message <Arrow /></button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-5 py-10 sm:px-8" style={{ borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#home" className="text-lg font-extrabold">
            Veduruvada <span className="t-orange">Jayavarshini</span>
          </a>
          <div className="flex gap-3">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="chip px-4 py-2 text-sm font-bold">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="chip px-4 py-2 text-sm font-bold">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="chip px-4 py-2 text-sm font-bold">Email</a>
          </div>
          <p className="text-sm t-muted">© {new Date().getFullYear()} Veduruvada Jayavarshini</p>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#home" aria-label="Back to top" className={`to-top ${scrolled ? "show" : ""}`}>↑</a>
    </div>
  );
}