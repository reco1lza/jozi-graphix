'use client'

import { useState } from 'react'

// To activate: create a free form at https://formspree.io, then paste its
// endpoint ID here (the part after formspree.io/f/ in your form URL).
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success">
        <h3>Thanks, we got it.</h3>
        <p>We will be in touch shortly. For anything urgent, give us a call on 072 720 0125.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-row">
        <div className="field">
          <label>Your name</label>
          <input type="text" name="name" placeholder="John Smith" required />
        </div>
        <div className="field">
          <label>Email address</label>
          <input type="email" name="email" placeholder="john@company.co.za" required />
        </div>
      </div>
      <div className="contact-row">
        <div className="field">
          <label>Phone number</label>
          <input type="tel" name="phone" placeholder="072 000 0000" />
        </div>
        <div className="field">
          <label>Company</label>
          <input type="text" name="company" placeholder="Your company name" />
        </div>
      </div>
      <div className="field">
        <label>What do you need?</label>
        <textarea name="message" rows={5} placeholder="Tell us about your project. Size, quantity, timeline, anything you know..." required />
      </div>
      {status === 'error' && (
        <p className="contact-error">Something went wrong. Please try again or email info@jozigraphix.co.za.</p>
      )}
      <button type="submit" className="btn-primary" style={{ marginTop: 8 }} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send message →'}
      </button>
    </form>
  )
}
