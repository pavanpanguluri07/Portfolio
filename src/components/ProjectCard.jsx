import { useRef } from "react"

export default function ProjectCard({ p }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rotX = (0.5 - py) * 8
    const rotY = (px - 0.5) * 8
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
    el.style.setProperty("--mx", `${px * 100}%`)
    el.style.setProperty("--my", `${py * 100}%`)
  }
  const reset = () => { const el = ref.current; if (el) el.style.transform = "" }

  return (
    <article onMouseMove={onMove} onMouseLeave={reset} className="relative perspective-1000">
      <div ref={ref} className="card card-gradient flex flex-col gap-3 transition-transform duration-150 will-change-transform">
        <div className="pointer-events-none absolute inset-0 rounded-2xl"
             style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.08), transparent 40%)" }} />
        <h3 className="text-xl font-semibold relative">{p.name}</h3>
        <p className="text-text/90 relative">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mt-2 relative">
          {p.stack.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
        <div className="mt-3 flex gap-4 relative">
          {p.links.demo && <a className="link" href={p.links.demo} target="_blank" rel="noreferrer">Live demo →</a>}
          {p.links.code && <a className="link" href={p.links.code} target="_blank" rel="noreferrer">Source code →</a>}
        </div>
      </div>
    </article>
  )
}
