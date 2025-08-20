import { useEffect, useState } from "react"
const ITEMS = [
  { q: "Delivers reliable microservices fast; great instincts on performance.", a: "Tech Lead, American Express" },
  { q: "Turns complex requirements into clean APIs. Calm under pressure.", a: "Manager, NielsenIQ" },
  { q: "Strong ownership; CI/CD improvements saved us weeks.", a: "Senior Engineer, NielsenIQ" }
]
export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setInterval(() => setI(p => (p + 1) % ITEMS.length), 4000); return () => clearInterval(id) }, [])
  const item = ITEMS[i]
  return (
    <div className="card card-gradient text-center">
      <p className="text-lg leading-relaxed">“{item.q}”</p>
      <div className="mt-3 text-text-muted text-sm">— {item.a}</div>
      <div className="mt-4 flex justify-center gap-2">
        {ITEMS.map((_, idx) => <span key={idx} className={`h-1.5 w-6 rounded-full ${idx===i ? 'bg-brand' : 'bg-white/10'}`} />)}
      </div>
    </div>
  )
}
