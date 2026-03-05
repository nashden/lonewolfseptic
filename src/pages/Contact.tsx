import { type FormEvent, useState } from 'react'
import Button from '../components/ui/Button'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Contact Us
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Have questions or need to schedule service? Reach out — we'd love to
        hear from you.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="rounded-xl bg-green-50 p-8 text-center">
              <h2 className="text-2xl font-semibold text-green-700">
                Thank You!
              </h2>
              <p className="mt-2 text-green-600">
                We've received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-forest focus:ring-1 focus:ring-forest focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-forest focus:ring-1 focus:ring-forest focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-forest focus:ring-1 focus:ring-forest focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-forest focus:ring-1 focus:ring-forest focus:outline-none"
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
            <ul className="mt-3 space-y-3 text-gray-600">
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:+15551234567" className="text-forest hover:underline">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@lonewolfseptic.com" className="text-forest hover:underline">
                  info@lonewolfseptic.com
                </a>
              </li>
              <li>
                <strong>Address:</strong> 123 Country Road, Yourtown, ST 12345
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Business Hours</h2>
            <ul className="mt-3 space-y-1 text-gray-600">
              <li>Monday – Friday: 7:00 AM – 6:00 PM</li>
              <li>Saturday: 8:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="font-medium text-forest">
                24/7 Emergency Service Available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
