import { Mail, Github, Linkedin } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'
import { basics } from '../data'

const Item = ({ href, children }) => (
  <a href={href} className="text-text-muted hover:text-text transition" target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-white/5">
      <nav className="container-base flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold">{basics.name}</Link>
        <div className="hidden md:flex items-center gap-5 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Item href={basics.links.github}><Github size={18} /></Item>
          <Item href={basics.links.linkedin}><Linkedin size={18} /></Item>
          <Item href={basics.links.email}><Mail size={18} /></Item>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
