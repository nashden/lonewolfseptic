import Button from '../components/ui/Button'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-dark px-4 py-24 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Your Septic System Deserves<br className="hidden md:block" />
          <span className="text-earth-light">the Right Team Behind It</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Licensed. Insured. Locally trusted. From routine pumping to emergency
          repairs, Lone Wolf Septic and Drains keeps your home protected — done
          right the first time, every time.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/contact">Get Your Free Quote Today</Button>
          <Button to="/services" variant="secondary">
            Our Services
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-6 md:min-h-[calc(100vh-6rem)]">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Why Choose Lone Wolf Septic and Drains?
        </h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
          {/* Mascot */}
          <div className="flex-shrink-0">
            <img
              src="/mascot.svg"
              alt="Lone Wolf mascot"
              className="w-56 md:w-72"
            />
          </div>

          {/* Levitating cards */}
          <div className="flex flex-col items-center gap-4">
            {[
              {
                title: 'Licensed & Insured',
                desc: 'Fully licensed professionals with comprehensive insurance coverage.',
                animation: 'animate-levitate-1',
                offset: '',
              },
              {
                title: '24/7 Emergency Service',
                desc: "Septic emergencies don't wait — and neither do we.",
                animation: 'animate-levitate-2',
                offset: 'md:ml-16',
              },
              {
                title: 'Locally Owned',
                desc: 'We live and work in this community. Your satisfaction is our reputation.',
                animation: 'animate-levitate-3',
                offset: '',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`max-w-md rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-md ${item.animation} ${item.offset}`}
              >
                <h3 className="text-xl font-bold text-forest">{item.title}</h3>
                <p className="mt-1.5 text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
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
