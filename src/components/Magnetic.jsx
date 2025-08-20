import { useRef } from "react"
export default function Magnetic({ children, strength = 18, className = "" }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - .5) * strength
    const y = ((e.clientY - rect.top) / rect.height - .5) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = "" }
  return (
    <span className={`inline-block will-change-transform ${className}`}
          ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </span>
  )
}
