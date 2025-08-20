import { useState } from 'react'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID'
export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const onSubmit = async (e) => {
    e.preventDefault(); setStatus('submitting')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
      if (res.ok) setStatus('success'); else setStatus('error')
    } catch { setStatus('error') }
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input className="card bg-transparent" type="text" name="name" placeholder="Your name" required />
      <input className="card bg-transparent" type="email" name="email" placeholder="Your email" required />
      <textarea className="card bg-transparent" name="message" placeholder="Your message" rows="5" required />
      <button className="badge w-fit" disabled={status==='submitting'}>{status==='submitting' ? 'Sending…' : 'Send message'}</button>
      {status==='success' && <div className="text-green-400">Thanks! I’ll get back to you soon.</div>}
      {status==='error' && <div className="text-red-400">Something went wrong. Please email me instead.</div>}
    </form>
  )
}
