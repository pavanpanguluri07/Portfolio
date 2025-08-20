// src/App.jsx
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Section from './components/Section'
import SkillBadge from './components/SkillBadge'
import TimelineItem from './components/TimelineItem'
import ProjectCard from './components/ProjectCard'
import StatCard from './components/StatCard'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

// NEW motion background
import BackgroundMotion from './components/BackgroundMotion'

// Optional extras (keep if you’re already using them)
import Magnetic from './components/Magnetic'
import CountUp from './components/CountUp'
import Marquee from './components/Marquee'
import Testimonials from './components/Testimonials'

import { basics, skills, experience, projects, achievements, education } from './data'

const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

export default function App() {
  return (
    <div>
      {/* Animated background */}
      <BackgroundMotion />
      <Navbar />

      {/* Hero */}
      <Section id="home">
        <div className="container-base text-center relative">
          <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
            <motion.p variants={fade} className="text-text-muted">Hi, I’m</motion.p>
            <motion.h1 variants={fade} className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="bg-[linear-gradient(90deg,#60a5fa,#93c5fd,#60a5fa)] bg-[length:200%_100%] animate-[shine_6s_linear_infinite] bg-clip-text text-transparent">
                {basics.name}
              </span>
            </motion.h1>
            <motion.p variants={fade} className="mt-3 text-xl md:text-2xl text-text/90">
              {basics.role}
            </motion.p>
            <motion.p variants={fade} className="mt-4 text-text-muted max-w-3xl mx-auto">
              {basics.summary}
            </motion.p>
            <motion.div variants={fade} className="mt-8 flex justify-center gap-3 flex-wrap">
              <Magnetic><a className="badge" href={basics.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a></Magnetic>
              <Magnetic><a className="badge" href={basics.links.github} target="_blank" rel="noreferrer">GitHub</a></Magnetic>
              <Magnetic><a className="badge" href={basics.links.resume} target="_blank" rel="noreferrer">Download Résumé</a></Magnetic>
              <Magnetic><a className="badge" href={`tel:${basics.phone}`}>{basics.phone}</a></Magnetic>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 mt-12">
            <StatCard stat={<CountUp to={25} suffix="%↓" />} label="Latency across services" />
            <StatCard stat={<CountUp to={18} suffix="%↑" />} label="User satisfaction" />
            <StatCard stat={<CountUp to={40} suffix="%↓" />} label="Release cycle time" />
          </div>
        </div>
      </Section>

      {/* Moving tech marquee */}
      <Marquee />

      {/* About */}
      <Section id="about" title="About" subtitle="How I build and what I value">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card card-gradient">
            <p>I craft backend-heavy, reliable platforms with clean APIs and strong testing culture. I enjoy simplifying complex flows and keeping performance high.</p>
            <p className="mt-3 text-text-muted">Comfortable across Java/Spring Boot, React, SQL/MongoDB, AWS. Fan of pragmatic patterns, automation, and shipping.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-3">Highlights</h4>
            <ul className="space-y-2 text-text/90 list-disc pl-4">
              {achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Daily drivers & favorite tools">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => <SkillBadge key={s} label={s} />)}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Roles & impact">
        <div className="space-y-6">
          {experience.map((t, i) => <TimelineItem key={i} item={t} />)}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="social-proof" title="What people say">
        <Testimonials />
      </Section>

      {/* Education */}
      <Section id="education" title="Education" subtitle="Degrees & foundations">
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{e.degree}</div>
              <div className="text-text-muted mt-1">{e.org} · {e.year}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s build something great">
        <div className="card card-gradient">
          <p className="text-text/90">Best way to reach me is email or LinkedIn. I’m open to backend-heavy full-stack roles and platform work.</p>
          <div className="mt-6"><ContactForm /></div>
        </div>
      </Section>

      <Footer name={basics.name} />
    </div>
  )
}
