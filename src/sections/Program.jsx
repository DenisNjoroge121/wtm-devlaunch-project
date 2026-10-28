
import SectionHeading from "../components/SectionHeading";

const benefits = [
  {
    title: "Learn by building",
    description:
      "Practice your skills by creating useful applications instead of only watching tutorials.",
  },
  {
    title: "Get mentor guidance",
    description:
      "Get direction, feedback, and advice as you work through your learning journey.",
  },
  {
    title: "Join a community",
    description:
      "Share ideas, learn together, and stay motivated with people on a similar path.",
  },
];

export default function Program() {
  return (
    <section id="program" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="About DevLaunch"
          title="A better way to start your tech journey"
          description="Learn practical skills, work on projects, and grow with a supportive community."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 font-bold text-brand-800">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-ink">
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
  );
}
