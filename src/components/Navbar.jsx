
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Program", to: "/#program" },
  { label: "Curriculum", to: "/#curriculum" },
  { label: "Mentors", to: "/#mentors" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "FAQ", to: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-brand-800"
        >
          Dev<span className="text-ink">Launch</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className="text-sm font-medium text-muted transition hover:text-brand-700"
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/signup"
            className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-ink hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-700 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className="rounded-lg py-2 text-sm font-medium text-muted hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/signup"
              onClick={closeMenu}
              className="rounded-xl bg-brand-700 px-5 py-3 text-center font-semibold text-white hover:bg-brand-800"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
