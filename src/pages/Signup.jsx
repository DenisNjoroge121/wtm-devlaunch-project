
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  track: "Frontend Development",
  experience: "Beginner",
  consent: false,
};

export default function Signup() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!form.consent) {
      setStatus("error");
      setError("Please agree to the signup terms before continuing.");
      return;
    }

    setStatus("submitting");

    try {
      // Demo only: replace this with an API request when a backend exists.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus("success");

      navigate("/thank-you", {
        replace: true,
        state: { name: form.name.trim() },
      });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-canvas px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          ← Back to home
        </Link>

        <div className="mt-6 rounded-card border border-gray-200 bg-white p-6 shadow-soft sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Your journey starts here
          </p>

          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Join the DevLaunch community
          </h1>

          <p className="mt-4 leading-7 text-muted">
            Tell us a little about yourself and the skills you want to develop.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
                value={form.name}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brand-600 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-brand-600 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="track" className="mb-2 block font-semibold">
                Preferred learning track
              </label>
              <select
                id="track"
                name="track"
                required
                value={form.track}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:border-brand-600 disabled:bg-gray-100"
              >
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Cloud & DevOps</option>
                <option>Cybersecurity</option>
              </select>
            </div>

            <fieldset>
              <legend className="mb-3 font-semibold">
                Your current experience
              </legend>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <label
                    key={level}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 ${
                      form.experience === level
                        ? "border-brand-600 bg-brand-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={level}
                      checked={form.experience === level}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="accent-brand-600"
                    />
                    <span className="text-sm font-medium">{level}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="mt-1 h-4 w-4 accent-brand-600"
              />
              <label htmlFor="consent" className="text-sm leading-6 text-muted">
                I agree to have my information used to demonstrate the
                DevLaunch signup process.
              </label>
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </p>
            )}

            {status === "success" && (
              <p role="status" className="rounded-xl bg-brand-50 p-4 text-sm text-brand-700">
                Signup completed successfully.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-brand-600 px-6 py-4 font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit application"}
            </button>

            <p className="text-center text-xs leading-5 text-muted">
              Demo notice: this form does not send or permanently store your
              information.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
