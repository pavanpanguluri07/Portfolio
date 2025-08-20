import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects, basics } from '../data'

export default function Projects() {
  return (
    <div>
      <Navbar />
      <Section id="projects" title="Projects" subtitle="Case studies & selected work">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </Section>
      <Footer name={basics.name} />
    </div>
  )
}
