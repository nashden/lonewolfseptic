import { type FormEvent, useState } from 'react'
import Button from '../components/ui/Button'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#012E4F] text-center text-white">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/ctavideo1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#012E4F]/75" />

        {/* Content */}
        <div className="relative z-10 px-4 py-14 md:py-24">
          {/* Mobile heading */}
          <h1 className="font-heading text-3xl font-bold md:hidden">
            Septic Done Right.<br />
            <span className="text-earth-light">Every Time.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-base text-gray-300 md:hidden">
            Licensed pros. Honest pricing. Trusted by your neighbors.
          </p>

          {/* Desktop heading */}
          <h1 className="hidden font-heading text-5xl font-bold md:block">
            Your Septic System Deserves<br />
            the <span className="text-earth">Right Team Behind It</span>
          </h1>
          <p className="mx-auto mt-4 hidden max-w-2xl text-xl text-gray-300 md:block">
            Standing apart from the pack by delivering reliable, responsible septic service every time.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="secondary">Get Your Free Quote Today</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#ECECEC] px-4 py-12 md:py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-center md:min-h-[calc(100vh-6rem)]">
        <h2 className="mb-6 text-center font-heading text-2xl font-bold text-gray-800 md:mb-8 md:text-3xl">
          Why Choose Lone Wolf Septic and Drains?
        </h2>

        {/* Mobile: mascot left, cards right (mirrors desktop) */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex-shrink-0">
            <img
              src="/mascot.svg"
              alt="Lone Wolf mascot"
              className="w-44"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2.5">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed with comprehensive insurance.', animation: 'animate-levitate-1' },
              { title: '24/7 Emergency', desc: "Emergencies don't wait — neither do we.", animation: 'animate-levitate-2' },
              { title: 'Locally Owned', desc: 'Your satisfaction is our reputation.', animation: 'animate-levitate-3' },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 shadow-md ${item.animation}`}
              >
                <h3 className="font-heading text-sm font-bold text-forest-dark">{item.title}</h3>
                <p className="mt-0.5 text-xs leading-snug text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: original side-by-side layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-6">
          <div className="flex-shrink-0">
            <img
              src="/mascot.svg"
              alt="Lone Wolf mascot"
              className="w-72"
            />
          </div>

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
                className={`max-w-md rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-md ${item.animation} ${item.offset}`}
              >
                <h3 className="font-heading text-xl font-bold text-forest-dark">{item.title}</h3>
                <p className="mt-1.5 text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#E0E0E0] px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold text-gray-800 md:text-3xl">
            How We Can Help
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Comprehensive septic solutions from a team you can trust.
          </p>

          {/* Featured services */}
          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:gap-5">
            <div className="rounded-xl bg-forest-dark px-4 py-4 text-white md:rounded-2xl md:px-8 md:py-8">
              <svg className="hidden h-10 w-10 text-earth-light md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.72 6.28l1.06-1.06" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l-1.5 4h11L16 16" />
              </svg>
              <h3 className="font-heading text-base font-bold md:mt-4 md:text-2xl">Septic Tank Pumping</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-300 md:mt-3 md:text-base">
                <span className="md:hidden">Regular pump-outs every 3–5 years keep your system healthy.</span>
                <span className="hidden md:inline">The most important thing you can do for your septic system.
                Regular pump-outs every 3–5 years prevent costly backups and
                extend the life of your system by decades.</span>
              </p>
            </div>
            <div className="rounded-xl bg-earth-light px-4 py-4 text-white md:rounded-2xl md:px-8 md:py-8">
              <svg className="hidden h-10 w-10 text-white md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <h3 className="font-heading text-base font-bold md:mt-4 md:text-2xl">24/7 Emergencies</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/85 md:mt-3 md:text-base">
                <span className="md:hidden">Call us any time, day or night. We respond fast.</span>
                <span className="hidden md:inline">Sewage backup? Overflow? Strange smells? Don't wait — call us
                any time, day or night. We respond fast so the damage stays small.</span>
              </p>
            </div>
          </div>

          {/* Supporting services */}
          <div className="mt-5 grid gap-3 grid-cols-2 lg:grid-cols-4 md:gap-5">
            {[
              {
                title: 'New Installations',
                desc: 'Full system design and installation, built to code.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                ),
              },
              {
                title: 'Inspections',
                desc: 'Detailed evaluations for buyers, sellers, and realtors.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: 'Repairs',
                desc: 'Fast diagnosis and repair for any septic issue.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                  </svg>
                ),
              },
              {
                title: 'Drain Fields',
                desc: 'Installation, repair, and restoration of drain fields.',
                icon: (
                  <svg className="h-8 w-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-gray-50 px-4 py-4 shadow-sm md:px-5 md:py-5"
              >
                <div className="hidden md:block">{service.icon}</div>
                <h3 className="font-heading text-sm font-bold text-gray-800 md:mt-3 md:text-base">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500 md:mt-1.5 md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="relative overflow-hidden bg-[#012E4F] px-4 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#012E4F] to-forest-dark opacity-90" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold text-white md:text-3xl">
            Proudly Serving Western North Carolina
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-300">
            Locally owned and operated — we're proud to serve our neighbors across WNC.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-12 md:gap-4">
            {[
              'Asheville',
              'Hendersonville',
              'Brevard',
              'Waynesville',
              'Canton',
              'Black Mountain',
              'Weaverville',
              'Mills River',
              'Fletcher',
              'Arden',
              'Flat Rock',
              'Swannanoa',
            ].map((city) => (
              <div
                key={city}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm transition-all hover:bg-earth hover:border-earth"
              >
                <span className="font-heading text-sm font-bold text-white">{city}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-300">
            Don't see your area? <a href="/contact" className="font-semibold text-earth hover:underline">Contact us</a> — we likely serve your community too.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#ECECEC] px-4 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl font-bold text-gray-800 md:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Don't just take our word for it — hear from homeowners across Western NC.
          </p>

          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
            {[
              {
                name: 'Sarah Mitchell',
                location: 'Asheville, NC',
                avatar: '/images/avatar-sarah.jpg',
                quote: 'Lone Wolf came out the same day I called. They were professional, upfront about pricing, and left my yard cleaner than they found it. I won\'t use anyone else for our septic needs.',
              },
              {
                name: 'David Reynolds',
                location: 'Hendersonville, NC',
                avatar: '/images/avatar-david.jpg',
                quote: 'We had a septic emergency on a Sunday night and they were at our door within the hour. Honest people who do honest work. Highly recommend to anyone in the area.',
              },
              {
                name: 'Karen Jacobs',
                location: 'Brevard, NC',
                avatar: '/images/avatar-karen.jpg',
                quote: 'They handled our full system inspection before we closed on our home. The report was thorough and they took the time to explain everything. Five stars all around.',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-xl bg-gray-50 px-6 py-6 shadow-sm"
              >
                <div className="mb-3 flex text-earth">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-gray-200 pt-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="font-heading text-sm font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative overflow-hidden bg-[#012E4F] px-4 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#012E4F] to-forest-dark opacity-90" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left side - messaging */}
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl font-bold text-white md:text-4xl">
                Ready to Get <span className="text-earth">Started?</span>
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Whether it's routine maintenance or an urgent issue, we're here to help. Fill out the form and our team will reach out within 24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 md:justify-start justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-earth/20">
                    <svg className="h-5 w-5 text-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Free estimates — no obligation</span>
                </div>
                <div className="flex items-center gap-3 md:justify-start justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-earth/20">
                    <svg className="h-5 w-5 text-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 md:justify-start justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-earth/20">
                    <svg className="h-5 w-5 text-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Licensed & insured professionals</span>
                </div>
              </div>
            </div>

            {/* Right side - form */}
            <div className="rounded-2xl bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-sm border border-white/10 md:px-8 md:py-10">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-earth/20">
                    <svg className="h-8 w-8 text-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-2 text-gray-300">We've received your request and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="home-name" className="block text-sm font-semibold text-gray-200">Name</label>
                      <input
                        type="text"
                        id="home-name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-email" className="block text-sm font-semibold text-gray-200">Email</label>
                      <input
                        type="email"
                        id="home-email"
                        name="email"
                        required
                        placeholder="john@email.com"
                        className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="home-phone" className="block text-sm font-semibold text-gray-200">Phone</label>
                      <input
                        type="tel"
                        id="home-phone"
                        name="phone"
                        required
                        placeholder="(828) 555-1234"
                        className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-address" className="block text-sm font-semibold text-gray-200">Address</label>
                      <input
                        type="text"
                        id="home-address"
                        name="address"
                        required
                        placeholder="123 Mountain Rd, Asheville"
                        className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-service" className="block text-sm font-semibold text-gray-200">Service Needed</label>
                    <select
                      id="home-service"
                      name="service"
                      required
                      className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                    >
                      <option value="" className="text-gray-800">Select a service...</option>
                      <option value="pumping" className="text-gray-800">Septic Tank Pumping</option>
                      <option value="installation" className="text-gray-800">New System Installation</option>
                      <option value="inspection" className="text-gray-800">Inspection & Evaluation</option>
                      <option value="repair" className="text-gray-800">Repairs & Troubleshooting</option>
                      <option value="drainfield" className="text-gray-800">Drain Field Services</option>
                      <option value="emergency" className="text-gray-800">Emergency Service</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="home-description" className="block text-sm font-semibold text-gray-200">
                      Description <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="home-description"
                      name="description"
                      rows={3}
                      placeholder="Tell us a little more about your situation..."
                      className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-gray-400 focus:border-earth focus:ring-1 focus:ring-earth focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-earth px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110"
                    >
                      Get My Free Quote
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
