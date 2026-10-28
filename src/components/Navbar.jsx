
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Program", to: "/#program" },
  { label: "Curriculum", to: "/#curriculum" },
  { label: "Mentors", to: "/#mentors" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="DevLaunch home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-extrabold text-white">
            D
          </span>
          <span className="text-xl font-extrabold tracking-tight">
            Dev<span className="text-brand-600">Launch</span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close menu" : "Menu"}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-muted transition hover:text-brand-600"
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/signup"
            className="rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Join the community
          </Link>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-gray-200 bg-white p-5 shadow-soft md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-ink hover:bg-brand-50"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center font-bold text-white"
            >
              Join the community
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
