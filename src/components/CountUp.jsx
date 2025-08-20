import { useEffect, useRef, useState } from "react"
export default function CountUp({ to = 100, duration = 1200, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0)
  useRef(0) // keep eslint quiet; not critical here
  useEffect(() => {
    let raf; const begin = performance.now()
    const loop = (now) => {
      const p = Math.min(1, (now - begin) / duration)
      setVal(Math.floor(p * to))
      if (p < 1) raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return <span>{prefix}{val}{suffix}</span>
}
