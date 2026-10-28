
import SectionHeading from "../components/SectionHeading";

const mentors = [
  {
    name: "Alex Morgan",
    role: "Frontend Developer",
    initials: "AM",
    description: "Helps beginners learn React and build user-friendly websites.",
  },
  {
    name: "Jordan Lee",
    role: "Backend Developer",
    initials: "JL",
    description: "Guides learners through APIs, databases, and server-side development.",
  },
  {
    name: "Taylor Kim",
    role: "Software Engineer",
    initials: "TK",
    description: "Shares advice on projects, teamwork, and preparing for tech careers.",
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Meet the mentors"
          title="Guidance for your journey"
          description="Explore examples of the guidance a mentorship community can offer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {mentors.map((mentor) => (
            <article
              key={mentor.name}
              className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-800"
                aria-hidden="true"
              >
                {mentor.initials}
              </div>

              <h3 className="mt-5 text-xl font-bold text-ink">
                {mentor.name}
              </h3>

              <p className="mt-1 font-medium text-brand-700">
                {mentor.role}
              </p>

              <p className="mt-4 leading-7 text-muted">
                {mentor.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-muted">
          Sample mentor profiles for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
