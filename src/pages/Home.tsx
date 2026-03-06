import Button from '../components/ui/Button'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark px-4 py-24 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Reliable Septic Services <br className="hidden md:block" />
          <span className="text-earth-light">You Can Trust</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          From installations to routine pumping and emergency repairs — Lone Wolf
          Septic and Drains keeps your system running right.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/contact">Get a Free Quote</Button>
          <Button to="/services" variant="secondary">
            Our Services
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Why Choose Lone Wolf Septic and Drains?
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Licensed & Insured',
              desc: 'Fully licensed professionals with comprehensive insurance coverage for your peace of mind.',
            },
            {
              title: '24/7 Emergency Service',
              desc: 'Septic emergencies don\'t wait — and neither do we. Call us any time, day or night.',
            },
            {
              title: 'Locally Owned',
              desc: 'We live and work in this community. Your satisfaction is our reputation.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 text-center shadow-sm"
            >
              <h3 className="text-xl font-semibold text-forest">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-earth px-4 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Schedule Service?</h2>
        <p className="mt-2">Contact us today for a free estimate.</p>
        <div className="mt-6">
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  )
}
