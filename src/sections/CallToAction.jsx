
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand-900 px-6 py-12 text-center text-white sm:px-12">
        <h2 className="text-3xl font-bold">
          Ready to start your journey?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-brand-100">
          Take the first step toward learning new skills, building
          projects, and growing your confidence.
        </p>

        <Link
          to="/signup"
          className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-brand-900 hover:bg-brand-50"
        >
          Join DevLaunch
        </Link>
      </div>
    </section>
  );
}
