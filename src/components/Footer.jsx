
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="text-lg font-extrabold">
          Dev<span className="text-brand-600">Launch</span>
        </Link>

        <p className="text-sm text-muted">
          Learn together. Build boldly. Grow your future.
        </p>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} DevLaunch. Demo project.
        </p>
      </div>
    </footer>
  );
}
