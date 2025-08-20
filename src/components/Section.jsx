export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container-base">
        {title && (
          <header className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-2 text-text-muted max-w-2xl">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
