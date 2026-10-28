
import SectionHeading from "../components/SectionHeading";

const testimonials = [
  {
    quote: "A clear learning path makes it easier to stay focused and keep improving.",
    name: "Sam",
    role: "Aspiring Developer",
  },
  {
    quote: "Building projects helps me understand concepts better than just reading about them.",
    name: "Chris",
    role: "Computer Science Student",
  },
  {
    quote: "A supportive learning community can make the journey into technology less intimidating.",
    name: "Jamie",
    role: "Beginner Programmer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-canvas px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Community experiences"
          title="Learning is better together"
          description="A good learning community encourages practice, collaboration, and steady progress."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <p className="text-lg leading-8 text-ink">
                “{testimonial.quote}”
              </p>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-bold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-muted">
          Sample testimonials for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
