
import { Link } from "react-router-dom";

const benefits = [
  {
    number: "01",
    title: "Learn with direction",
    description:
      "Follow a practical learning path instead of guessing what to study next.",
  },
  {
    number: "02",
    title: "Build real projects",
    description:
      "Turn what you learn into projects that demonstrate your skills.",
  },
  {
    number: "03",
    title: "Grow with community",
    description:
      "Learn alongside other developers, share feedback, and celebrate progress.",
  },
];

const learningPaths = [
  {
    title: "Frontend Development",
    description: "Create responsive interfaces with React and modern web tools.",
    tag: "Web interfaces",
  },
  {
    title: "Backend Development",
    description: "Learn APIs, databases, application logic, and server-side skills.",
    tag: "Server-side",
  },
  {
    title: "Cloud & DevOps",
    description: "Explore cloud fundamentals, deployment, and development workflows.",
    tag: "Cloud skills",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-muted">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-canvas">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700">
              <span
                className="h-2 w-2 rounded-full bg-brand-500"
                aria-hidden="true"
              />
              Your next chapter starts here
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Don't just learn to code.
              <span className="mt-2 block text-brand-600">
                Build your future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              DevLaunch is a developer mentorship community designed to help
              aspiring developers build practical skills, create meaningful
              projects, and take confident steps toward a tech career.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="rounded-full bg-brand-600 px-7 py-4 text-center font-bold text-white shadow-soft transition hover:bg-brand-700"
              >
                Apply to join
                <span aria-hidden="true"> →</span>
              </Link>

              <a
                href="#program"
                className="rounded-full border border-gray-300 bg-white px-7 py-4 text-center font-bold transition hover:border-brand-500 hover:text-brand-700"
              >
                Explore the program
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span>✓ Practical learning</span>
              <span>✓ Project-focused</span>
              <span>✓ Community support</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-100 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative rounded-[2rem] border border-gray-200 bg-white p-5 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted">
                    Your learning journey
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold">
                    Small steps. Real progress.
                  </h2>
                </div>

                <span className="rounded-xl bg-brand-50 p-3 text-2xl" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["01", "Learn the fundamentals", "Build a strong foundation"],
                  ["02", "Create your first project", "Put knowledge into practice"],
                  ["03", "Share and improve", "Get feedback and iterate"],
                  ["04", "Prepare for opportunities", "Present your skills confidently"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-extrabold text-brand-700">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-muted">
                A sample learning journey illustrating the DevLaunch approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why DevLaunch"
            title="More than tutorials"
            description="Learning software development is easier when you have a clear direction, opportunities to practise, and a community that encourages you."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-card border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-sm font-extrabold text-brand-600">
                  {benefit.number}
                </p>
                <h3 className="mt-5 text-xl font-extrabold">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="bg-canvas px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore your path"
            title="Choose what you want to build"
            description="Explore example learning tracks and discover where your interests could take you."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {learningPaths.map((path) => (
              <article
                key={path.title}
                className="rounded-card border border-gray-200 bg-white p-7"
              >
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  {path.tag}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{path.title}</h3>
                <p className="mt-3 leading-7 text-muted">{path.description}</p>
                <Link
                  to="/signup"
                  className="mt-6 inline-flex font-bold text-brand-700 hover:text-brand-900"
                >
                  Explore this path <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mentors" className="bg-brand-900 px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-100">
              Ready to begin?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Your next project could change everything.
            </h2>
            <p className="mt-4 leading-7 text-gray-200">
              Take the first step toward a more structured learning journey.
            </p>
          </div>

          <Link
            to="/signup"
            className="shrink-0 rounded-full bg-white px-7 py-4 font-bold text-brand-900 transition hover:bg-brand-50"
          >
            Join DevLaunch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
