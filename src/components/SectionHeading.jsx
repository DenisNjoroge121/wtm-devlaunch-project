
export default function SectionHeading({
  label,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-700">
        {label}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}
