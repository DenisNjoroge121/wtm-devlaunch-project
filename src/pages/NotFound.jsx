
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-canvas px-5 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-extrabold">
          This page took a wrong turn.
        </h1>

        <p className="mt-4 leading-7 text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand-600 px-7 py-4 font-bold text-white hover:bg-brand-700"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
