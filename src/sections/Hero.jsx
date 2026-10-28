
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-800">
            Your journey into tech starts here
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Learn skills.
            <span className="block text-brand-700">
              Build projects.
            </span>
            Grow your future.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            DevLaunch helps aspiring developers learn practical skills,
            build projects, and take their next step in technology.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-xl bg-brand-700 px-6 py-3 text-center font-semibold text-white hover:bg-brand-800"
            >
              Join DevLaunch
            </Link>

            <a
              href="#program"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-center font-semibold text-ink hover:border-brand-600 hover:text-brand-700"
            >
              Explore the program
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
            <span>✓ Practical learning</span>
            <span>✓ Community support</span>
            <span>✓ Career guidance</span>
          </div>
        </div>

        <div className="rounded-3xl bg-brand-900 p-6 text-white shadow-soft sm:p-8">
          <p className="text-sm text-brand-100">
            YOUR LEARNING JOURNEY
          </p>

          <h2 className="mb-8 mt-2 text-2xl font-bold">
            From beginner to builder
          </h2>

          <div className="space-y-4">
            {[
              ["STEP 01", "Learn the fundamentals"],
              ["STEP 02", "Create real projects"],
              ["STEP 03", "Prepare for opportunities"],
            ].map(([step, title]) => (
              <div key={step} className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-brand-100">{step}</p>
                <p className="mt-1 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
