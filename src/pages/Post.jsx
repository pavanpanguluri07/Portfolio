import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { basics } from '../data'

import HowLatency from '../../posts/how-i-cut-latency-25.mdx'

export default function Post() {
  const { slug } = useParams()
  return (
    <div>
      <Navbar />
      <Section id="post">
        <article className="prose prose-invert max-w-none">
          {slug === 'how-i-cut-latency-25' && <HowLatency />}
        </article>
      </Section>
      <Footer name={basics.name} />
    </div>
  )
}
