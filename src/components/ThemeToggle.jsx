import { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setDark(saved === 'dark')
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])
  const toggle = () => {
    const next = dark ? 'light' : 'dark'
    setDark(!dark)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }
  return <button onClick={toggle} className="badge" aria-label="Toggle theme">{dark ? '🌙 Dark' : '☀️ Light'}</button>
}
