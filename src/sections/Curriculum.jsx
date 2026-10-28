
import SectionHeading from "../components/SectionHeading";

const learningPaths = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and how to build websites.",
    icon: "🌐",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Understand APIs, databases, authentication, and server-side logic.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Career Growth",
    description:
      "Build your portfolio, improve your CV, and prepare for interviews.",
    icon: "🚀",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-24 bg-canvas px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What you will learn"
          title="Skills that help you move forward"
          description="Explore practical learning paths designed to develop your technical skills and prepare you for your career."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {learningPaths.map((path) => (
            <article
              key={path.number}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden="true">
                  {path.icon}
                </span>
                <span className="text-sm font-bold text-brand-700">
                  {path.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-ink">
                {path.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {path.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
