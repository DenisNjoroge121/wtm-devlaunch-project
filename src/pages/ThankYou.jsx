
import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  const name = location.state?.name;

  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-canvas px-5 py-16">
      <section className="w-full max-w-xl rounded-card border border-gray-200 bg-white p-8 text-center shadow-soft sm:p-12">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-3xl text-brand-700"
          aria-hidden="true"
        >
          ✓
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-600">
          Application complete
        </p>

        <h1 className="mt-3 text-3xl font-extrabold">
          {name ? `You're on your way, ${name}!` : "Thank you for your interest!"}
        </h1>

        <p className="mt-4 leading-7 text-muted">
          Your demo signup has been completed. This prototype doesn't send
          your application to a server, but you've successfully tested the
          frontend signup flow.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white hover:bg-brand-700"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
