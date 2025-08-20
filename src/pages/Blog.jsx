import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { basics } from '../data'

const posts = [
  { slug: 'how-i-cut-latency-25', title: 'How I Cut P95 Latency by ~25% Across Microservices', date: '2024-11-10' }
]

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Section id="blog" title="Blog" subtitle="Notes, write-ups, and wins">
        <div className="grid gap-4">
          {posts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card hover:scale-[1.01] transition">
              <div className="text-xl font-semibold">{p.title}</div>
              <div className="text-text-muted text-sm mt-1">{p.date}</div>
            </Link>
          ))}
        </div>
      </Section>
      <Footer name={basics.name} />
    </div>
  )
}
