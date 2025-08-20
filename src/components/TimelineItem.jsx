export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-brand" />
      <div className="card card-gradient">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold">{item.title} · {item.org}</h3>
          <span className="text-text-muted text-sm">{item.period}</span>
        </div>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-text/90">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  )
}
